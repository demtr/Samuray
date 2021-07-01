import land from "../../img/landscape.webp";
import c from "./Profile.module.css";
import ava from "../../img/ava.png"
import Preloader from "../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, isMe, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const getPhoto = (e) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return <>
        <img src={land} alt="Profile wallpaper" className={c.land}/>
        <div><h2>{profile.fullName}</h2></div>
        <div><font color="red" size="+2">{profile.aboutMe}</font></div>
        <div><img src={profile.photos?.large || ava} alt="Contact picture" className={c.mainPhoto} /></div>
        {isMe && <div><i>Изменить фото профиля</i><br/><input type={"file"} onChange={getPhoto}/></div>}
        <div><h3>Контакты:</h3></div>
        <div>{ Object.entries(profile.contacts).map(c => {
            if (c[1]) return <div> <b>{c[0]}:</b> {c[1]}</div>
            else return "";
        }
        )}</div>
        <div><br/><b>Поиск работы:</b> {profile.lookingForAJob?<i>"Да"</i>:"Нет"}</div>
        {profile.lookingForAJob?<div><b>Описание:</b> {profile.lookingForAJobDescription}</div>:""}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isMe={isMe}/>
    </>
}

export default ProfileInfo