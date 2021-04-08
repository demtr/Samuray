const ADD_POST = "ADD-POST";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

// В reducer передаются action и state. state, относящийся к данной ветке
const profileBlockReducer = (action, state) => {
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

            state.anyPosts.push(
                {
                    id: nextId,
                    message: state.newMsgText,
                    lcount: 0
                });
            state.newMsgText = ""; // обнуляем поле сообщения после добавления его текста в store
            break;

        case CHANGE_MESSAGE:
            // Метод заносит обновлённое сообщение в store при любом минимальном изменении
            state.newMsgText = action.msgText;
            break;

        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type:ADD_POST});
export const changeMessageActionCreator = (text) => ({type:CHANGE_MESSAGE, msgText:text});

export default profileBlockReducer;