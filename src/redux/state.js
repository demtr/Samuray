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
            ]
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
        if (action.type === "ADD-POST") {
// Метод для добавления сообщения в массив данных на стороне BLL.
// Текст сообщения через параметры не передаём, т.к. оно уже передано в State ф-ей changeMsg(),
// т.е. мы берем его из state.profileBlock.newMsgText

            // В этой функции находим максимальный id поста
            let getMaxId = () => {
                if (this._state.profileBlock.anyPosts.length === 0) return 0;
                let max = this._state.profileBlock.anyPosts[0]?.id; // существуют элементы в массиве?
                this._state.profileBlock.anyPosts.forEach(item => {
                    if (item.id > max)
                        max = item.id;
                });
                return max ?? 0;
            };

            let nextId = getMaxId() + 1;

            this._state.profileBlock.anyPosts.push(
                {
                    id: nextId,
                    message: this._state.profileBlock.newMsgText,
                    lcount: 0
                });
            this._state.profileBlock.newMsgText = ""; // обнуляем поле сообщения после добавления его текста в store
            this._callSubscriber(this._state); // перерисовываем весь интерфейс

        } else if (action.type === "CHANGE-MESSAGE") {
            // Метод заносит обновлённое сообщение в store при любом минимальном изменении
                this._state.profileBlock.newMsgText = action.msgText;
                this._callSubscriber(this._state);

        }
    },

}

export default store;