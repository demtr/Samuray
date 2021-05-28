import {getAuthorizedUserThunkCreator} from "./authReducer";

const INITIALIZED = "INITIALIZED";

let initialState = {
    initialized: false
};

// В reducer передаются action и state. state, относящийся к данной ветке
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,  // не нужно, но на перспективу
                initialized: true
            };

        default:
            break;
    }
    return state;
}

const setInitialized = () => ({type: INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let dispatched = dispatch(getAuthorizedUserThunkCreator());
    Promise.all([dispatched])
        .then (
            ()=>{
                dispatch(setInitialized());
            }
        )
}

export default appReducer;