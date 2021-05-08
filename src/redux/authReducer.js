import {authApi} from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const LOGIN_USER = "LOGIN_USER";

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
                ...action.data,
                isAuth: true
            };
        case LOGIN_USER:
            return {...state, email: action.email}
        default:
            break;
    }
    return state;
}

export const setAuthUser = (id, email, login) => ({type: SET_AUTH_USER, data: {userId: id, email, login}});
export const loginUser = (email) => ({type: LOGIN_USER, email});

export const getAuthorizedUserThunkCreator = () => (dispatch) => {
    authApi.isAuthorized()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data; // деструктурирующее присваивание
                dispatch(setAuthUser(id, email, login));
            }
        });

}

export const loginUserThunkCreator = (login) => (dispatch) => {
                console.log("loginUserThunkCreator success!")
    authApi.loginUser(login)
        .then((data) => {
            if (data.resultCode === 0) {
                console.log("loginUserThunkCreator success! data=",data.data)
                let {email} = login; // деструктурирующее присваивание
                dispatch(loginUser( email));
            } else {
                console.warn("loginUserThunkCreator ERROR! messages=",data.messages)

            }
        });
}

export default authReducer;