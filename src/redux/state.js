let state = {
    profileBlock: {
        anyPosts: [
            {id: 1, message: "Hello, how are you?", lcount: 12},
            {id: 2, message: "It's my first post!", lcount: 45},
            {id: 3, message: "It works correct!", lcount: 19},
        ]
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
            {id: 1, message: "Hey you!"},
            {id: 1, message: "Yo!"},
        ]
    },
    sideBar: {}
}

export default state;