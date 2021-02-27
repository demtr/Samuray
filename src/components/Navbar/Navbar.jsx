import c from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header className={c.nav}>
            <div><a href="/profile">Profile</a></div>
            <div><a href="/dialogs"> Messages </a></div>
            <div><a href="/news"> News </a></div>
            <div><a href="/music"> Music </a></div>
            <div><a href="/settings"> Settings </a></div>
        </header>
    )
}

export default Navbar;