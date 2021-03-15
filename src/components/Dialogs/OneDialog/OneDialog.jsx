import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const OneDialog = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>
}

export default OneDialog;