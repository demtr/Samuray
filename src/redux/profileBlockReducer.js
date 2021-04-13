const ADD_POST = "ADD-POST";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";
let initialState = {
    anyPosts: [
        {id: 1, message: "Hello, how are you?", lcount: 12},
        {id: 2, message: "It's my first post!", lcount: 45},
        {id: 3, message: "It works correct!", lcount: 19},
    ],
    newMsgText: "Type text here"
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

            let newState = {...state}; // копия для чистой функции, чтобы не изменялись передаваемые параметры
            newState.anyPosts = [...state.anyPosts];
            newState.anyPosts.push(
                {
                    id: nextId,
                    message: state.newMsgText,
                    lcount: 0
                });
            newState.newMsgText = ""; // обнуляем поле сообщения после добавления его текста в store
            return newState;

        case CHANGE_MESSAGE:
            // Метод заносит обновлённое сообщение в store при любом минимальном изменении
            let stateCopy = {...state};
            stateCopy.newMsgText = action.msgText;
            return stateCopy;

        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type:ADD_POST});
export const changeMessageActionCreator = (text) => ({type:CHANGE_MESSAGE, msgText:text});

export default profileBlockReducer;