

export let store = {
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
    renderFullTree: () => {},

// Метод для добавления сообщения в массив данных на стороне BLL.
// Экспортируем имя ф-ции не в дефолтном виде, здесь экспортное имя важно!
// Текст сообщения через параметры не передаём, т.к. оно уже передано в State ф-ей changeMsg(),
// т.е. мы берем его из state.profileBlock.newMsgText
    addPost: function() {

        // В этой функции находим максимальный id поста
        let getMaxId = () => {
            if (store.profileBlock.anyPosts.length === 0) return 0;
            let max=store.profileBlock.anyPosts[0]?.id; // существуют элементы в массиве?
            store.profileBlock.anyPosts.forEach(item => {
                if (item.id > max)
                    max = item.id;
            });
            return max??0;
        };

        let nextId = getMaxId() + 1;

        store.profileBlock.anyPosts.push({id: nextId, message: store.profileBlock.newMsgText, lcount: 0});
        store.profileBlock.newMsgText = ""; // обнуляем поле сообщения после добавления его текста в store
        store.renderFullTree(store); // перерисовываем весь интерфейс
    },

    // Метод заносит сообщение в store
    changeMsg: function(msg) {
        store.profileBlock.newMsgText = msg;
        store.renderFullTree(store);
    },

    // C помощью этого метода передаём ф-ию renderFullTree из index.js
    delegate: (observer) => {
        store.renderFullTree = observer;
    }

}