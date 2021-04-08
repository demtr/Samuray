import dialogBlockReducer from "./dialogBlockReducer";
import sideBarReducer from "./sideBarReducer";
import profileBlockReducer from "./profileBlockReducer";

let store = {
    _state: {
        profileBlock: {
            anyPosts: [
                {id: 1, message: "Hello, how are you?", lcount: 12},
                {id: 2, message: "It's my first post!", lcount: 45},
                {id: 3, message: "It works correct!", lcount: 19},
            ],
            newMsgText: "Type text here"
        },
        dialogBlock: {
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
        },
        sideBar: {},
    },
    _callSubscriber() {},

    // C помощью этого метода передаём ф-ию renderFullTree из index.js
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // Метод - getter для закрытого _state
    getState () {
        return this._state;
    },

    // Вместо нескольких методов ввели один!
    dispatch(action) {
        this._state.profileBlock = profileBlockReducer(action, this._state.profileBlock);
        this._state.dialogBlock = dialogBlockReducer(action, this._state.dialogBlock);
        this._state.sideBar = sideBarReducer(action, this._state.sideBar);
        this._callSubscriber(this._state); // перерисовываем весь интерфейс
    },

};

export default store;