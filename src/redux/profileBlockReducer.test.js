import profileBlockReducer, {addPostActionCreator, deletePostActionCreator} from "./profileBlockReducer";

let state = {
    anyPosts: [
        {id: 1, message: "Hello, how are you?", lcount: 12},
        {id: 2, message: "It's my first post!", lcount: 45},
        {id: 3, message: "It works correct!", lcount: 19},
    ]
};

test('add new post', () => {
    // 1. test data
    let action =addPostActionCreator("Yahoo!");

    // 2. action
    let newState = profileBlockReducer(state,action)

    // 3. expectation
    expect(newState.anyPosts.length).toBe(4);
});

test('post text verification', () => {
    // 1. test data
    let action =addPostActionCreator("Yahoo!");

    // 2. action
    let newState = profileBlockReducer(state,action)

    // 3. expectation
    expect(newState.anyPosts[3].message).toBe("Yahoo!");
});

test('post deletion', () => {
    // 1. test data
    let action =deletePostActionCreator(1);

    // 2. action
    let newState = profileBlockReducer(state,action)

    // 3. expectation
    expect(newState.anyPosts.length).toBe(2);
});

test('wrong id post deletion', () => {
    // 1. test data
    let action =deletePostActionCreator(19999);

    // 2. action
    let newState = profileBlockReducer(state,action)

    // 3. expectation
    expect(newState.anyPosts.length).toBe(3);
});
