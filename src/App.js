import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
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
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/login" component={LoginForm}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let MyApp = connect(mapStateToProps,{initializeApp})(App);

let SocialNetApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <MyApp/>
        </Provider>
    </BrowserRouter>;
};

export default SocialNetApp;
