const ADD_POST = "ADD-POST";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
    anyPosts: [
        {id: 1, message: "Hello, how are you?", lcount: 12},
        {id: 2, message: "It's my first post!", lcount: 45},
        {id: 3, message: "It works correct!", lcount: 19},
    ],
    newMsgText: "Type text here",
    profile: null
};

// В reducer передаются action и state. state, относящийся к данной ветке
const profileBlockReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // Метод для добавления сообщения в массив данных на стороне BLL.
            // Текст сообщения через параметры не передаём, т.к. оно уже передано в State ф-ей changeMsg(),
            // т.е. мы берем его из state.profileBlock.newMsgText

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
                message: state.newMsgText,
                lcount: 0
            };

            return {
                ...state,  // копия для чистой функции, чтобы не изменялись передаваемые параметры
                anyPosts: [...state.anyPosts, newMsg], // добавили элемент к скопированному массиву
                newMsgText: "" // обнуляем поле сообщения после добавления его текста в store
            };

        case CHANGE_MESSAGE:
            // Метод заносит обновлённое сообщение в store при любом минимальном изменении
            return {
                ...state,
                newMsgText: action.msgText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type:ADD_POST});
export const changeMessageActionCreator = (text) => ({type:CHANGE_MESSAGE, msgText:text});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});

export default profileBlockReducer;