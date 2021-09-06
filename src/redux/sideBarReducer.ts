let initialState = {};
type initialStateType = typeof initialState;

// В reducer передаются action и state. state, относящийся к данной ветке
const sideBarReducer = (state = initialState, action: any):initialStateType => {
    return state;
};

export default sideBarReducer;