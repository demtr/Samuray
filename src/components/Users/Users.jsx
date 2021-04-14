import React from "react";
import ava from "../../img/ava.png"
import c from "./Users.module.css"

const Users = (props) => {
    const ulist = props.users.map(el => <div key={el.id}>
        <table><tr><td width="100px"><div><img src={el.id === 1 ? ava : el.foto} alt="avatar" className={c.ava}/></div>
            <div>{el.follower?
            <button onClick={(id) => {props.onUnFollow(el.id);}}>unfollow</button>:
            <button onClick={(id) => {props.onFollow(el.id);}}>follow</button>}</div></td>
        <td><div className={c.name}>{el.name}</div><div>{el.location.city} ({el.location.country})</div>
            <div>Статус: {el.mood}</div></td>
        </tr></table>
    </div>);
    return <div>{ulist}</div>
}

export default Users;