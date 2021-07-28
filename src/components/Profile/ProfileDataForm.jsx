import ava from "../../img/ava.png";
import c from "./Profile.module.css";
import {Input, Textarea} from "../common/FormControls";
import {Field, reduxForm} from "redux-form";
import {required} from "../common/validators";
import style from "../Login/Login.module.css";

const ProfileDataForm = ({profile, isMe, savePhoto, goOutOfEditMode, handleSubmit, error}) => {
    const getPhoto = (e) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }
    let cnt = 0;

    return <form onSubmit={handleSubmit}>
        <h2 className={c.head}>Edit profile</h2>
        <div><img src={profile.photos?.large || ava} alt="Contact picture" className={c.mainPhoto}/></div>
        {isMe && <div><i>Изменить фото профиля</i><br/><input type={"file"} onChange={getPhoto}/></div>}
        <br/>
        <div><b>Полное имя: </b>
            <Field type="text" name="fullName" component={Input}
                   validate={[required]} placeholder="полное имя"/></div>
        <div><b>Про меня: </b>
            <Field type="text" name="aboutMe" component={Textarea}
                   validate={[required]} placeholder="про меня" cols="50"/></div>
        <div><h3>Контакты:</h3></div>
        {error && <div className={style.errDiv}><span className={style.error}>{error}</span></div>}
        <div className={c.contacts}>{Object.entries(profile.contacts).map(c => {
                return <div key={cnt++}><b>{c[0]}: </b>

                    <Field type="text" name={"contacts." + c[0]} component={Input}
                           validate={[]}/>
                </div>
            }
        )}</div>
        <div><br/><b>Поиск работы:</b>
            <Field type="checkbox" name="lookingForAJob" component={Input}/></div>
        <div><b>Мой рабочий опыт:</b></div>
        <div><Field type="text" name="lookingForAJobDescription" component={Textarea} cols="50"/></div>
        {isMe && <div>
            <button>Save</button>
            <button onClick={goOutOfEditMode}>Cancel</button>
        </div>}
    </form>
}

const ReduxFormProfileData = reduxForm({
    form: 'profile-data' // a unique identifier for this form
})(ProfileDataForm);

export default ReduxFormProfileData