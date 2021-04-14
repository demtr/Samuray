import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    // const vr = React.version;
    return (
            <div className="App-container">
                <Header/>
                {/*Версия React:{vr};*/}
                <Navbar/>
                <div className="App-container-content">
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>
                </div>
            </div>
    );
}

export default App;
