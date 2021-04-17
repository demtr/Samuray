import {combineReducers, createStore} from "redux";
import profileBlockReducer from "./profileBlockReducer";
import dialogBlockReducer from "./dialogBlockReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profileBlock: profileBlockReducer,
    dialogBlock: dialogBlockReducer,
    sideBar: sideBarReducer,
    usersBlock: usersReducer
})

let store = createStore(reducers);

export default store;