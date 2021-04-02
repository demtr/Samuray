import {renderFullTree} from "../render.js";

let state = {
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
    sideBar: {}
}

// Ф-ция для добавления сообщения в массив данных на стороне BLL.
// Экспортируем имя ф-ции не в дефолтном виде, здесь экспортное имя важно!
export let addPost = () => {
// debugger;
    // в ф-ции находим максимальный id поста
    let getMaxId = () => {
        if (state.profileBlock.anyPosts.length === 0) return 0;
        let max=state.profileBlock.anyPosts[0]?.id; // существуют элементы в массиве?
        for (let i=1; i<state.profileBlock.anyPosts.length; i++)
            if (state.profileBlock.anyPosts[i].id > max)
                max = state.profileBlock.anyPosts[i].id;
        return max;
    };

    let nextId = getMaxId() + 1;

    state.profileBlock.anyPosts.push({id: nextId, message: state.profileBlock.newMsgText, lcount: 0});
    state.profileBlock.newMsgText = "";
    renderFullTree(state);
};

export let changeMsg =(msg) => {
    state.profileBlock.newMsgText = msg;
    renderFullTree(state);
};

export default  state; // по дефолту можем указывать любое имя, это не важно при импорте!