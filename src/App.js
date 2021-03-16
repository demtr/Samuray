import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(p) {
    // const vr = React.version;
    return (
        <BrowserRouter>
            <div className="App-container">
                <Header/>
                {/*Версия React:{vr};*/}
                <Navbar/>
                <div className="App-container-content">
                    <Route path="/dialogs" render={() => <Dialogs dlg={p.dialogs} msg={p.messages}/>}/>
                    <Route path="/profile" render={() => <Profile pst={p.anyPosts}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
