import React from "react";
import Pager from "../common/Pager";
import User from "./User";

let Users = (props) => {

    // Формирование списка пользователей
    const userList = props.users.map(el => <User user={el} {...props} key={el.id}/>);
    return <div> <Pager totItems={props.totUsers} {...props}/> {userList} </div>;
}

export default Users;