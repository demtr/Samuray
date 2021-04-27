import {userApi} from "../api/api";

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
                ...action.data,
                isAuth: true
            };

        default:
            break;
    }
    return state;
}

export const setAuthUser = (id, email, login) => ({type: SET_AUTH_USER, data: {userId: id, email, login}});

export const getAuthorizedUserThunkCreator = () => (dispatch) => {
    userApi.isAuthorized()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data; // деструктурирующее присваивание
                dispatch(setAuthUser(id, email, login));
            }
        });

}

export default authReducer;