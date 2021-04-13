const ADD_MESSAGE_TO_DIALOG = "ADD-MESSAGE-TO-DIALOG";
const CHANGE_DIALOG_MESSAGE = "CHANGE-DIALOG-MESSAGE";
let initialState = {
    dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Zorro"},
        {id: 3, name: "Javier"},
        {id: 4, name: "Mike"},
        {id: 5, name: "Ramirez"},
    ],
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hey you!"},
        {id: 3, message: "Yo!"},
    ],
    newMsgText: ""
};

// В reducer передаются action и state. state, относящийся к данной ветке
const dialogBlockReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_MESSAGE_TO_DIALOG:
            // В этой функции находим максимальный id сообщения
            let getMaxId = () => {
                if (state.messages.length === 0) return 0;
                let max = state.messages[0]?.id; // существуют элементы в массиве?
                state.messages.forEach(item => {
                    if (item.id > max) max = item.id;
                });
                return max ?? 0;
            };

            let nextId = getMaxId() + 1;
            newState = {...state};
            newState.messages = [...state.messages];
            newState.messages.push(
                {
                    id: nextId,
                    message: state.newMsgText
                });
            newState.newMsgText = ""; // обнуляем поле сообщения после добавления его текста в store
            return newState;

        case CHANGE_DIALOG_MESSAGE:
            // Метод заносит обновлённое сообщение в store при любом минимальном изменении
            newState = {...state};
            newState.newMsgText = action.msgText;
            return newState;

        default:
            break;
    }
    return state;
};

export const addMessageToDialogActionCreator = () => ({type: ADD_MESSAGE_TO_DIALOG});
export const changeDialogMessageActionCreator = (text) => ({type: CHANGE_DIALOG_MESSAGE, msgText: text});

export default dialogBlockReducer;