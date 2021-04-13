import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


// Функциональная компонента ничего не знает о store, работает только с контейнерной компонентой
const MyPosts = (p) => {
    // Здесь функция map преобразует массив данных в массив компонентов, содержащих этих данных,
    // фактически оборачивает данные в html разметку!
    const myPostsComp = p.state.anyPosts.map(el => <Post key={el.id} message={el.message} lcount={el.lcount}/>);
    // Создание ссылки в стиле React, которую мы применим в теге для использования в функции.
    // Сама по себе ссылка до её применения ничего не даёт.
    let newTextRef = React.createRef();

    // Использование проброшенной функции для добавления сообщения в массив сообщений на стороне бизнес логики.
    // Получения текста сообщения происходит на стороне BLL.
    let newPost = () => {
        p.newPost();
    };

    // При любом изменении текста меняем state
    // Для получения текста сообщения используем созданную ссылку.
    let whenPostChanged = () => {
        p.whenPostChanged(newTextRef.current.value);
    };

    return (
        <div className={c.theBlock}>

            <h3 className={c.item}>My posts</h3>
           {/* // используем созданную ссылку newTextRef в теге с помощью аттрибута ref*/}
            <div><textarea ref={newTextRef} className={c.new}
                           value={p.state.newMsgText} onChange={whenPostChanged}/>
            </div>
            <div>
                {/*// Передаём в обработчик события не вызов функции, а ссылку на неё!*/}
                <button onClick={newPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {myPostsComp}
            </div>
        </div>
    );
}

export default MyPosts;