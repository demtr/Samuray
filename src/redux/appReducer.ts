import {getAuthorizedUserThunkCreator} from "./authReducer";

const INITIALIZED = "INITIALIZED";

export type initialStateType = {
    initialized: boolean
};

let initialState: initialStateType = {
    initialized: false
};

type actionType = {
    type: string
}

// В reducer передаются action и state. state, относящийся к данной ветке
const appReducer = (state = initialState, action: actionType): initialStateType => {
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

type setInitializedActionType = {
    type: typeof INITIALIZED // тип, сформированный из переменной (собственный typeof у typescript)
}

// возвращаемое значаение строго типизировано!
const setInitialized = (): setInitializedActionType => ({type: INITIALIZED});

export const initializeApp = () => (dispatch: Function) => {
    let dispatched = dispatch(getAuthorizedUserThunkCreator());
    Promise.all([dispatched])
        .then (
            ()=>{
                dispatch(setInitialized());
            }
        )
}

export default appReducer;