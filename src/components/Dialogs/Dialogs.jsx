import c from "./Dialogs.module.css";
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (p) => {
    const dlgDataComp = p.state.dialogs.map(dlg => <OneDialog key={dlg.id} name={dlg.name} id={dlg.id}/>);
    const msgDataComp = p.state.messages.map(m => <Message key={m.id} message={m.message}/>);
    const addNewMessage = (value) => {p.onAddMessage(value.msgText);};

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dlgDataComp}
            </div>
            <div className={c.messages}>
                {msgDataComp}
                <NewMsgReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const newMsgForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="msgText" component="textarea" placeholder="Enter your text" />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const NewMsgReduxForm = reduxForm({form:"newMsgForm"})(newMsgForm);

export default Dialogs;