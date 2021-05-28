import React from "react";
import ava from "../../img/ava.png"
import c from "./Users.module.css"
import {NavLink} from "react-router-dom";

let User = (props) => {

    // Формирование одного пользователя для списка

    const user = props.user;
    return <div>
        <table><tbody>
            <tr>
                <td width="100px">
                    <div><NavLink to={"profile/" + user.id}>
                        <img src={user.photos.small ?? ava} alt="avatar" className={c.ava}/>
                    </NavLink>
                    </div>
                    <div>{user.followed ?
                        <button disabled={props.followButtonFetching?.some(id => id === user.id)}
                                onClick={() => {
                                    props.unfollow(user.id)
                                }}>unfollow</button> :
                        <button disabled={props.followButtonFetching?.some(id => id === user.id)}
                                onClick={() => {
                                    props.follow(user.id)
                                }}>follow</button>}</div>
                </td>
                <td>
                    <div className={c.name}>{user.name}</div>
                    <div>{"user.location.city"} ({"user.location.country"})</div>
                    <div>Статус: {user.status}</div>
                </td>
            </tr>
        </tbody></table>
    </div>;
};

export default User;