import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Недефолтное экспортированное имя импортируем в фигурных скобках
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

export let renderFullTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
           <App store={store}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

renderFullTree(store);

store.delegate(renderFullTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
