import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className={c.nav}>
            <div><NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={c.activeLink}> Messages </NavLink></div>
            <div><NavLink to="/news"> News </NavLink></div>
            <div><NavLink to="/music"> Music </NavLink></div>
            <div><NavLink to="/settings"> Settings </NavLink></div>
        </header>
    )
}

export default Navbar;