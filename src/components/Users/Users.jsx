import React from "react";
import Pager from "../common/Pager";
import User from "./User";
import c from "./Users.module.css";

let Users = (props) => {

    // Формирование списка пользователей
    const userList = props.users.map(el => <User user={el} {...props} key={el.id}/>);
    return <div>
        <div><Pager totItems={props.totUsers} {...props}/></div>
        <div>{userList}</div>
    </div>;
}

export default Users;