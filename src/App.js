import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    processAllUnhandledErrors(reason) {
        alert('An ERROR occured!!!\n'+reason.reason.message ?? "");
        console.error("Some error occured! Reason:", reason.reason.message)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.processAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.processAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App-container">
                <HeaderContainer/>
                {/*Версия React:{React.version};*/}{/*17.0.1*/}
                <Navbar/>
                <div className="App-container-content">
                    {/*<Switch>*/}
                        {/*<Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>*/}
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/login" component={LoginForm}/>
                        {/*<Route path="*" render={()=><div>404 - NOT FOUND</div>}/>*/}
                    {/*</Switch>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let MyApp = connect(mapStateToProps, {initializeApp})(App);

let SocialNetApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <MyApp/>
        </Provider>
    </BrowserRouter>;
};

export default SocialNetApp;
