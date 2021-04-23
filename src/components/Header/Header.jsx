import pic1 from "../../img/logo-ex-7.png"
import c from "./Header.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (
        <div className={c.header}>
            <NavLink to="/"><img src={pic1} alt="logo"/></NavLink>
            <a href="http://kuku.ru">File </a> -
            <a href="#">Edit</a> -
            <a href="#">Help</a>
            <span className={c.login}>
                {props.isAuth ? props.login : <NavLink to="/login">login</NavLink>}
            </span>
        </div>
    )
}

export default Header;