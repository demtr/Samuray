import React from "react";
import ava from "../../img/ava.png"
import c from "./Users.module.css"
import * as axios from "axios"

class Users extends React.Component {
    // Контструктор вызывается только 1 раз при создании компоненты
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response)=>{props.getUsers(response.data.items);});
    }
    render() {

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
        return <div>{ulist}</div>
    }
}

export default Users;