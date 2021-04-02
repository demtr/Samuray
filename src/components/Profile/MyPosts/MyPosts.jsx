import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (p) => {
    // Здесь функция map преобразует массив данных в массив компонентов, содержащих этих данных,
    // фактически оборачивает данные в html разметку!
    const myPostsComp = p.postList.map(el => <Post key={el.id} message={el.message} lcount={el.lcount}/>);
    // Создание ссылки в стиле React, которую мы применим в теге для использования в функции.
    // Сама по себе ссылка до её применения ничего не даёт.
    let newTextRef = React.createRef();

    // Использование проброшенной функции для добавления сообщения в массив сообщений на стороне бизнес логики.
    // Для получения текста сообщения используем созданную ссылку.
    let newPost = () => {
        p.addPost();
    };

    let whenPostChanged = () => {
        p.changeMsg(newTextRef.current.value);
    };

    return (
        <div className={c.theBlock}>

            <h3 className={c.item}>My posts</h3>
           {/* // используем созданную ссылку newTextRef в теге с помощью аттрибута ref*/}
            <div><textarea ref={newTextRef} className={c.new}
                           value={p.msg} onChange={whenPostChanged}/>
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