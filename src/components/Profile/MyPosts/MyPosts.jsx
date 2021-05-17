import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../common/validators";
import {Textarea} from "../../common/FormControls";


// Функциональная компонента ничего не знает о store, работает только с контейнерной компонентой
const MyPosts = (p) => {
    // Здесь функция map преобразует массив данных в массив компонентов, содержащих этих данных,
    // фактически оборачивает данные в html разметку!
    const myPostsComp = p.state.anyPosts.map(el => <Post key={el.id} message={el.message} lcount={el.lcount}/>);

    // Использование проброшенной функции для добавления сообщения в массив сообщений на стороне бизнес логики.
    // Получения текста сообщения происходит на стороне BLL.
    let addNewPost = (formContent) => {
        p.newPost(formContent.newMsgText);
    };

    return (
        <div className={c.theBlock}>

            <h3 className={c.item}>My posts</h3>
            <NewPostReduxForm onSubmit={addNewPost}/>
            <div className={c.posts}>
                {myPostsComp}
            </div>
        </div>
    );
}

// Через замыкание создаём ф-цию с максимальной требуемой длиной
const maxLength = maxLengthCreator(30);

const newPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Textarea} name={"newMsgText"} className={c.new}
                    placeholder={"Type new post here"} validate={[required, maxLength]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const NewPostReduxForm = reduxForm({form: "newPostForm"})(newPostForm);

export default MyPosts;