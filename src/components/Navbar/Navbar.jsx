import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className={c.nav}>
            <div><NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={c.activeLink}> Messages </NavLink></div>
            <div><NavLink to="/news" activeClassName={c.activeLink}> News </NavLink></div>
            <div><NavLink to="/music" activeClassName={c.activeLink}> Music </NavLink></div>
            <div><NavLink to="/settings" activeClassName={c.activeLink}> Settings </NavLink></div>
            <div><NavLink to="/users" activeClassName={c.activeLink}> Find users </NavLink></div>
        </header>
    )
}

export default Navbar;