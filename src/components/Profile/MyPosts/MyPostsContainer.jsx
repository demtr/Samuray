import React from "react";
import {addPostActionCreator, changeMessageActionCreator} from "../../../redux/profileBlockReducer";
import MyPosts from "./MyPosts";

// Контейнерная компонента. Замыкает на себе общение с store
const MyPostsContainer = (p) => {
    // наружу передаём только локальные переменные
    let state = p.store.getState().profileBlock;

    // Использование проброшенной функции для добавления сообщения в массив сообщений на стороне бизнес логики.
    // Получения текста сообщения происходит на стороне BLL.
    // В функциональную компонету передаём только локальные callback - и
    let newPost = () => {
        p.store.dispatch(addPostActionCreator());
    };

    // При любом изменении текста меняем state
    // Для получения текста сообщения используем созданную ссылку.
    let whenPostChanged = (text) => {
        p.store.dispatch(changeMessageActionCreator(text));
    };

    return (
        <MyPosts state={state} newPost={newPost} whenPostChanged={whenPostChanged} />
    );
}

export default MyPostsContainer;