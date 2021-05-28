import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

// для активации браузерного расширения Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store
export default store;