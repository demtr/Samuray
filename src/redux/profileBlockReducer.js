import {profileApi} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    anyPosts: [
        {id: 1, message: "Hello, how are you?", lcount: 12},
        {id: 2, message: "It's my first post!", lcount: 45},
        {id: 3, message: "It works correct!", lcount: 19},
    ],
    profile: null,
    status: ""
};

// В reducer передаются action и state. state, относящийся к данной ветке
const profileBlockReducer = (state = initialState, action) => {
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
            return {...state, anyPosts: state.anyPosts.filter(p=>p.id!=action.id)};

        default:
            break;
    }
    return state;
}

export const addPostActionCreator = (msg) => ({type: ADD_POST, msg});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    return profileApi.getProfile(userId)
        .then((data) => {
            dispatch(setUserProfile(data));
        });
}

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
    return profileApi.getStatus(userId)
        .then((data) => {
            dispatch(setUserStatus(data));
        });
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
    return profileApi.updateStatus(status)
        .then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}

export default profileBlockReducer;