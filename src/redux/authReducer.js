import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = "SET_AUTH_USER";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

// В reducer передаются action и state. state, относящийся к данной ветке
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                ...action.data
            };

        default:
            break;
    }
    return state;
}

export const setAuthUser = (id, email, login, isAuth) => ({type: SET_AUTH_USER, data: {userId: id, email, login, isAuth}});

export const getAuthorizedUserThunkCreator = () => (dispatch) => {
    authApi.isAuthorized()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data; // деструктурирующее присваивание
                dispatch(setAuthUser(id, email, login, true));
            }
        });
}

export const loginUserThunkCreator = (login) => (dispatch) => {
    authApi.loginUser(login)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch( getAuthorizedUserThunkCreator());
            } else {
                dispatch(stopSubmit("login", {_error: data.messages.join(", ")}))
                console.warn("loginUserThunkCreator ERROR! messages=",data.messages)
            }
        });
}

export const logoutUserThunkCreator = () => (dispatch) => {
    authApi.logoutUser()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false));
            } else {
                console.warn("logoutUserThunkCreator ERROR! messages=",data.messages)
            }
        });
}

export default authReducer;