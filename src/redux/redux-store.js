import {applyMiddleware, combineReducers, createStore} from "redux";
import profileBlockReducer from "./profileBlockReducer";
import dialogBlockReducer from "./dialogBlockReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profileBlock: profileBlockReducer,
    dialogBlock: dialogBlockReducer,
    sideBar: sideBarReducer,
    usersBlock: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;