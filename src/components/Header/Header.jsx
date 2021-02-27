import pic1 from "../../img/logo-ex-7.png"
import c from "./Header.module.css"

const Header = () => {
    return (
        <div className={c.header}>
            <header>
                <img src={pic1} alt="logo"/>
                    <a href="#">File </a> -
                    <a href="#">Edit</a> -
                    <a href="#">Help</a>

            </header>

        </div>
    )
}

export default Header;