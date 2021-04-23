import {combineReducers, createStore} from "redux";
import profileBlockReducer from "./profileBlockReducer";
import dialogBlockReducer from "./dialogBlockReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profileBlock: profileBlockReducer,
    dialogBlock: dialogBlockReducer,
    sideBar: sideBarReducer,
    usersBlock: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);
window.store = store
export default store;