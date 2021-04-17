import React from "react";
import ava from "../../img/ava.png"
import c from "./Users.module.css"
import * as axios from "axios"
import classNames from "classnames"

class Users extends React.Component {
    // Метод componentDidMount вызывается только 1 раз после отрисовки компоненты
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.getUsers(response.data.items);
                this.props.setNumberOfUsers(response.data.totalCount);
            });
    }

    goToPage = (page) => {
        this.props.setPageNumber(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.getUsers(response.data.items);
                this.props.setNumberOfUsers(response.data.totalCount);
            });
    }

    render() {
        const pages = () => {
            let totPages= Math.ceil(this.props.totUsers/this.props.pageSize);
            let pages=[];
            for (let p=1; p<=totPages; p++) {
                pages.push(p);
            }
            let clLink = (p) => {
                let cn = classNames([c.pageLink]);
                if (p === this.props.currentPage) cn = classNames([c.actLink]);
                return cn;
            };
            return pages.map(p => <span onClick={()=>{this.goToPage(p)}}
                                      className={clLink(p)}>{p} </span>);
        };
        const ulist = this.props.users.map(el => <div key={el.id}>
            <table>
                <tr>
                    <td width="100px">
                        <div><img src={el.photos.small ?? ava} alt="avatar" className={c.ava}/></div>
                        <div>{el.followed ?
                            <button onClick={(id) => {
                                this.props.onUnFollow(el.id);
                            }}>unfollow</button> :
                            <button onClick={(id) => {
                                this.props.onFollow(el.id);
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
}

export default Users;