import {useEffect, useState} from "react";
import c from "./Profile.module.css";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

// хук useEffect вызывается после отрисовки и при изменении зависимостей (2-ой аргумент)
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const setEditModeOn = () => {
        if (!props.isMe) return; // не меняем свой статус на основании чужого!
        setEditMode(true);
    }
    const setEditModeOff = () => {
        setEditMode(false);
        if (props.status !== status) {
            props.updateStatus(status);
        }
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return <div>
        <div className={c.status}>Статус:</div>
        {!editMode &&
        <div onDoubleClick={setEditModeOn}>{props.status || "нет"}</div>}
        {editMode &&
        <div><input type="text" onBlur={setEditModeOff}
                    autoFocus={true} size="50"
                    onChange={onStatusChange}
                    value={status}/></div>}
    </div>;
}

export default ProfileStatusWithHooks;