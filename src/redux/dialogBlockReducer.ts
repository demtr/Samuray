const ADD_MESSAGE_TO_DIALOG = "ADD-MESSAGE-TO-DIALOG";

type DialogType = {id: number, name: string}

type MessageType = {id: number, message: string}

let initialState = {
    dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Zorro"},
        {id: 3, name: "Javier"},
        {id: 4, name: "Mike"},
        {id: 5, name: "Ramirez"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hey you!"},
        {id: 3, message: "Yo!"},
    ] as Array<MessageType>
};

type initialStateActionType = typeof initialState;

// В reducer передаются action и state. state, относящийся к данной ветке
const dialogBlockReducer = (state = initialState, action: any): initialStateActionType => {
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
            let newMsg = {
                id: nextId,
                message: action.msg
            };
            return {
                ...state,
                messages: [...state.messages, newMsg],
            };

        default:
            break;
    }
    return state;
};

type addMessageToDialogActionType = {
    type: typeof ADD_MESSAGE_TO_DIALOG, msg: string
}
export const addMessageToDialogActionCreator = (msg: string): addMessageToDialogActionType =>
    ({type: ADD_MESSAGE_TO_DIALOG, msg});

export default dialogBlockReducer;