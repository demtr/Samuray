import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className={c.nav}>
            <div><NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={c.activeLink}> Dialogs </NavLink></div>
            <div><NavLink to="/users" activeClassName={c.activeLink}> Find users </NavLink></div>
        </header>
    )
}

export default Navbar;