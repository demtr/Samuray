import React from "react";
import {addPostActionCreator, changeMessageActionCreator} from "../../../redux/profileBlockReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// Контейнерная компонента. Замыкает на себе общение с store
const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                // Использование проброшенной функции для добавления сообщения в массив сообщений на стороне бизнес логики.
                // Получения текста сообщения происходит на стороне BLL.
                // В функциональную компонету передаём только локальные callback - и
                let newPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                // При любом изменении текста меняем state
                // Для получения текста сообщения используем созданную ссылку.
                let whenPostChanged = (text) => {
                    store.dispatch(changeMessageActionCreator(text));
                };

                return <MyPosts state={store.getState().profileBlock}
                                newPost={newPost} whenPostChanged={whenPostChanged}/>;
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;