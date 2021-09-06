import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

export type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
};

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

// В reducer передаются action и state. state, относящийся к данной ветке
const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_AUTH_USER:
        case SET_CAPTCHA_URL:
            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                ...action.data
            };

        default:
            break;
    }
    return state;
}

type userDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setAuthUserActionType = {
    type: typeof SET_AUTH_USER
    data: userDataType
}

const setAuthUser = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserActionType => ({
    type: SET_AUTH_USER,
    data: {userId: id, email, login, isAuth}
});

export const getAuthorizedUserThunkCreator = () => async (dispatch: Function) => {
    let data = await authApi.isAuthorized()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data; // деструктурирующее присваивание
        dispatch(setAuthUser(id, email, login, true));
    }
}

export const loginUserThunkCreator = (login: any) => async (dispatch: Function) => {
    let data = await authApi.loginUser(login)
    if (data.resultCode === 0) {
        dispatch(setCaptchaUrl(null));
        dispatch(getAuthorizedUserThunkCreator());
    } else {
        dispatch(stopSubmit("login", {_error: data.messages.join(", ")}));
        console.warn("loginUserThunkCreator ERROR! messages=", data.messages);
        if (data.resultCode === 10) { // captcha needed!
            dispatch(getCaptchaUrl());
        }
    }
}

export const logoutUserThunkCreator = () => async (dispatch: Function) => {
    let data = await authApi.logoutUser()
    if (data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false));
        dispatch(setCaptchaUrl(null));
    } else {
        console.warn("logoutUserThunkCreator ERROR! messages=", data.messages);
    }
}

const getCaptchaUrl = () => async (dispatch: Function) => {
    const data = await securityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL,
    data: {captchaUrl: string | null}
}

const setCaptchaUrl = (url: string | null): setCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    data: {captchaUrl: url}
});

export default authReducer;