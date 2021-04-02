import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Недефолтное экспортированное имя импортируем в фигурных скобках
import {BrowserRouter} from "react-router-dom";
import {addPost, changeMsg} from "./redux/state";

export let renderFullTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeMsg={changeMsg}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}


