import land from "../../img/landscape.webp";
import c from "./Profile.module.css";
import ava from "../../img/ava.png"
import Preloader from "../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, isMe, updateStatus, savePhoto, saveProfile, editMode, setEditMode}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
    }

    return <>
        {isMe && <img src={land} alt="Profile wallpaper" className={c.land}/>}
        {editMode
            ? <><ProfileDataForm profile={profile} isMe={ isMe} savePhoto={savePhoto} initialValues={profile}
                               goOutOfEditMode={()=>{setEditMode(false);}} onSubmit={onSubmit}/>
                               <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isMe={isMe}/>
                               </>
            : <><ProfileData profile={profile} isMe={ isMe}
                             goToEditMode={()=>{setEditMode(true);}}/>
                             <div className={c.status}>Статус:</div>
                             <div>{status}</div></>}
    </>
}

const ProfileData = ({profile, isMe, goToEditMode}) => {
    let cnt=0;
    return <>
        <div><h2>{profile.fullName}</h2></div>
        <div><font color="red" size="+2">{profile.aboutMe}</font></div>
        <div><img src={profile.photos?.large || ava} alt="Contact" className={c.mainPhoto} /></div>
        <div className={c.contactsHead}><h3>Контакты:</h3></div>
        <div className={c.contacts}>{ Object.entries(profile.contacts).map(c => {
                if (c[1]) {cnt++; return <div key={cnt}> <b>{c[0]}:</b> {c[1]}</div>}
                else return "";
            }
        )}
        {!!cnt || <div>Нет данных</div>}
        </div>
        <div><br/><b>Поиск работы:</b> {profile.lookingForAJob?<i>"Да"</i>:"Нет"}</div>
        {profile.lookingForAJob?<div><b>Опыт работы:</b> {profile.lookingForAJobDescription}</div>:""}
        {isMe && <button onClick={goToEditMode}>Edit</button>}
    </>
}

export default ProfileInfo