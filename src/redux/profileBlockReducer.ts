import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {photoType, postType, profileType} from "../types/types";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_NEW_PHOTO = "SET_NEW_PHOTO";
const EDIT_PROFILE = "EDIT_PROFILE";

let initialState = {
    anyPosts: [
        {id: 1, message: "Hello, how are you?", lcount: 12},
        {id: 2, message: "It's my first post!", lcount: 45},
        {id: 3, message: "It works correct!", lcount: 19},
    ] as Array<postType>,
    profile: null as profileType | null,
    profileEdit: null as boolean | null,
    status: "" as string
};


type initialStateType = typeof initialState;

// В reducer передаются action и state. state, относящийся к данной ветке
const profileBlockReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            // Метод для добавления сообщения в массив данных на стороне BLL.
            // Текст сообщения берем из action.msg

            // В этой функции находим максимальный id поста
            let getMaxId = () => {
                if (state.anyPosts.length === 0) return 0;
                let max = state.anyPosts[0]?.id; // существуют элементы в массиве?
                state.anyPosts.forEach(item => {
                    if (item.id > max) max = item.id;
                });
                return max ?? 0;
            };

            let nextId = getMaxId() + 1;
            let newMsg = {
                id: nextId,
                message: action.msg,
                lcount: 0
            };

            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                anyPosts: [...state.anyPosts, newMsg] // добавили элемент к скопированному массиву
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_USER_STATUS:
            return {...state, status: action.status};

        case DELETE_POST:
            return {...state, anyPosts: state.anyPosts.filter(p => p.id !== action.id)};

        case SET_NEW_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos} as profileType};

        case EDIT_PROFILE:
            return {...state, profileEdit: action.edit};

        default:
            break;
    }
    return state;
}

type addPostActionType = {
    type: typeof ADD_POST,
    msg: string
}
export const addPostActionCreator = (msg: string): addPostActionType => ({type: ADD_POST, msg});
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
const setUserProfile = (profile: profileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type setUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}
const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_USER_STATUS, status});
type deletePostActionType = {
    type: typeof DELETE_POST,
    id: number
}
export const deletePostActionCreator = (id: number): deletePostActionType => ({type: DELETE_POST, id});
type setNewPhotosActionType = {
    type: typeof SET_NEW_PHOTO,
    photos: photoType
}
const setNewPhotos = (photos: photoType): setNewPhotosActionType => ({type: SET_NEW_PHOTO, photos});
type setEditProfileActionType = {
    type: typeof EDIT_PROFILE,
    edit: boolean
}
export const setEditProfile = (edit: boolean): setEditProfileActionType => ({type: EDIT_PROFILE, edit});

export const getUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    let data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    let data = await profileApi.getStatus(userId)
    dispatch(setUserStatus(data));
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: any) => {
    let data = await profileApi.updateStatus(status)
    if (data.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const updatePhotoThunkCreator = (file: any) => async (dispatch: any) => {
    let response = await profileApi.updatePhotos(file);
    if (response.data.resultCode === 0) {
        dispatch(setNewPhotos(response.data.data.photos));
    }
}

export const saveProfileThunkCreator = (profile: profileType) => async (dispatch: any, getState: Function) => {
    const userId = getState().auth.userId;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId));
        dispatch(setEditProfile(false))
    } else {
        // processing server error messages
        const errMsg = response.data.messages;
        const contKey = "Contacts->";
        type errObjType = {
            contacts: any
            _error: any
        }
        const errObj = {} as errObjType;
        errMsg.forEach((err: string) => {
            const errPos = err.indexOf(contKey);

            if (~errPos) {
                const errField = err[errPos + contKey.length].toLowerCase() +
                    err.slice(errPos + contKey.length + 1, -1);
                errObj["contacts"] = {...errObj["contacts"], [errField]: err};
            } else {
                errObj["_error"] = err;
            }
        });
        dispatch(stopSubmit('profile-data', errObj))
    }
}

export default profileBlockReducer;