import {addPostActionCreator} from "../../../redux/profileBlockReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// ф-ция возвращает объект данных
let mapStateToProps = (state) => {
    return {
        state: state.profileBlock
    }
}

// ф-ция возвращает объект коллбеков
let mapDispatchToProps = (dispatch) => {
    return {
        newPost: (text) => {dispatch(addPostActionCreator(text));}
    }
}

// connect созадёт контейнерную компоненту MyPostsContainer. Она замыкает на себе
// общение со store и передаёт данные и колбеки в презентационную компоненту MyPosts.
// store передаётся по технологии context через компоненту Provider в файле index.js
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;