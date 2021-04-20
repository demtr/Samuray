import pic1 from "../../img/pexels-photo-248797.jpeg";
import c from "./Profile.module.css";
import Preloader from "../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <>
        <img src={pic1} alt="Profile wallpaper"/>
        <div><h2>{props.profile.fullName}</h2></div>
        <div><font color="red" size="+2">{props.profile.aboutMe}</font></div>
        <div><img src={props.profile.photos.large} alt="Contact picture"/></div>
        <div><h3>Контакты:</h3></div>
        <div>{ Object.entries(props.profile.contacts).map(c => {
            if (c[1]) return <div> <b>{c[0]}:</b> {c[1]}</div>
            else return "";
        }
        )}</div>
        <div><br/><b>Поиск работы:</b> {props.profile.lookingForAJob?<i>"Да"</i>:"Нет"}</div>
        {props.profile.lookingForAJob?<div><b>Описание:</b> {props.profile.lookingForAJobDescription}</div>:""}
    </>
}

export default ProfileInfo