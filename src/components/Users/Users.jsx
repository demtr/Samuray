import React from "react";
import ava from "../../img/ava.png"
import c from "./Users.module.css"
import classNames from "classnames"
import {NavLink} from "react-router-dom";

let Users = (props) => {

    // Формирование строки страниц
    const pages = () => {
        let totPages = Math.ceil(props.totUsers / props.pageSize);
        let pages = [];
        let firstPage;
        if (props.currentPage -10 < 1) firstPage=1;
        else firstPage=props.currentPage -10;
        for (let p = firstPage; p <= firstPage+(totPages-firstPage>20?20:totPages-firstPage); p++) {
            pages.push(p);
        }
        let clLink = (p) => {
            let cn = classNames([c.pageLink]);
            if (p === props.currentPage) cn = classNames([c.actLink]);
            return cn;
        };
        pages = pages.map(p => <span onClick={() => {props.goToPage(p)}}
                                     className={clLink(p)}>{p} </span>);
        if (firstPage>1) {
            let m20 = firstPage-10<1? 1 :firstPage-10;
            pages = [<span><span onClick={() => {props.goToPage(m20)}}
                           className={classNames([c.pageLink, c.jump])}>-20 &lt;&lt; </span> &nbsp;</span>,...pages]
        }
        if (props.currentPage < totPages-10) {
            let p20 = props.currentPage+20 > totPages? totPages :props.currentPage+20;
            pages = [...pages, <span>  &nbsp; &nbsp; <span onClick={() => {props.goToPage(p20)}}
                           className={classNames([c.pageLink, c.jump])}> &gt;&gt; +20</span></span>]
        }
        return pages;
    };

    // Формирование списка пользователей
    const ulist = props.users.map(el => <div key={el.id}>
        <table>
            <tr>
                <td width="100px">
                    <div><NavLink to={"profile/" + el.id}>
                            <img src={el.photos.small ?? ava} alt="avatar" className={c.ava}/>
                        </NavLink>
                    </div>
                    <div>{el.followed ?
                        <button disabled={props.followButtonFetching?.some(id=>id===el.id)}
                                onClick={()=>{props.unfollow(el.id)}}>unfollow</button> :
                        <button disabled={props.followButtonFetching?.some(id=>id===el.id)}
                                onClick={()=>{props.follow(el.id)}}>follow</button>}</div>
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