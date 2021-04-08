const ADD_MESSAGE_TO_DIALOG = "ADD-MESSAGE-TO-DIALOG";
const CHANGE_DIALOG_MESSAGE = "CHANGE-DIALOG-MESSAGE";

// В reducer передаются action и state. state, относящийся к данной ветке
const dialogBlockReducer = (action, state) => {
    switch (action.type) {
        case ADD_MESSAGE_TO_DIALOG:
            // В этой функции находим максимальный id сообщения
            let getMaxId = () => {
                if (state.messages.length === 0) return 0;
                let max = state.messages[0]?.id; // существуют элементы в массиве?
                state.messages.forEach(item => {if (item.id > max) max = item.id;});
                return max ?? 0;
            };

            let nextId = getMaxId() + 1;

            state.messages.push(
                {   id: nextId,
                    message: state.newMsgText
                });
            state.newMsgText = ""; // обнуляем поле сообщения после добавления его текста в store
            break;

        case CHANGE_DIALOG_MESSAGE:
            // Метод заносит обновлённое сообщение в store при любом минимальном изменении
            state.newMsgText = action.msgText;
            break;

        default:
            break;
    }
    return state;
};

export const addMessageToDialogActionCreator = () => ({type:ADD_MESSAGE_TO_DIALOG});
export const changeDialogMessageActionCreator = (text) => ({type:CHANGE_DIALOG_MESSAGE, msgText:text});

export default dialogBlockReducer;