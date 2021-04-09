import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Недефолтное экспортированное имя импортируем в фигурных скобках
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

export let renderFullTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
           <App state={state}
                /*Подвох с контекстом вызова! Если передать просто: store.addPost, то this внутри него будет зависеть от
                контекста, то есть от той функции, где непосредственно будет происходить вызов.
                Для преодоления этого явления используем bind() */
                dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderFullTree(store.getState());

// redux не передаёт в listener данные state
store.subscribe(() => {renderFullTree(store.getState())});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
