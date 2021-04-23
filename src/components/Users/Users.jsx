import React from "react";
import ava from "../../img/ava.png"
import c from "./Users.module.css"
import classNames from "classnames"
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";

let Users = (props) => {

    const pages = () => {
        let totPages = Math.ceil(props.totUsers / props.pageSize);
        let pages = [];
        for (let p = 1; p <= totPages; p++) {
            pages.push(p);
        }
        let clLink = (p) => {
            let cn = classNames([c.pageLink]);
            if (p === props.currentPage) cn = classNames([c.actLink]);
            return cn;
        };
        return pages.map(p => <span onClick={() => {props.goToPage(p)}}
                                    className={clLink(p)}>{p} </span>);
    };
    const ulist = props.users.map(el => <div key={el.id}>
        <table>
            <tr>
                <td width="100px">
                    <div><NavLink to={"profile/" + el.id}>
                            <img src={el.photos.small ?? ava} alt="avatar" className={c.ava}/>
                        </NavLink>
                    </div>
                    <div>{el.followed ?
                        <button onClick={() => {
                            userApi.unSubscribe(el.id)
                                .then((data) => {
                                    if (data.resultCode === 0) {
                                        props.onUnFollow(el.id);
                                    }
                                });
                        }}>unfollow</button> :
                        <button onClick={() => {
                            userApi.subscribe(el.id)
                                .then((data) => {
                                    if (data.resultCode === 0) {
                                        props.onFollow(el.id);
                                    }
                                });
                        }}>follow</button>}</div>
                </td>
                <td>
                    <div className={c.name}>{el.name}</div>
                    <div>{"el.location.city"} ({"el.location.country"})</div>
                    <div>Статус: {el.status}</div>
                </td>
            </tr>
        </table>
    </div>);
    return <div>{pages()}{ulist}</div>
}

export default Users;