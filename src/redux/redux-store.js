import {combineReducers, createStore} from "redux";
import profileBlockReducer from "./profileBlockReducer";
import dialogBlockReducer from "./dialogBlockReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profileBlock: profileBlockReducer,
    dialogBlock: dialogBlockReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers);

export default store;