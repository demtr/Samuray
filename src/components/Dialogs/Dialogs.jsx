import c from "./Dialogs.module.css";
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";
import {addMessageToDialogActionCreator, changeDialogMessageActionCreator} from "../../redux/state";

const Dialogs = (p) => {
    const dlgDataComp = p.state.dialogs.map(dlg => <OneDialog name={dlg.name} id={dlg.id}/>);
    const msgDataComp = p.state.messages.map(m => <Message message={m.message}/>);
    const onAddMessage = () => {p.dispatch(addMessageToDialogActionCreator());};
    const onMessageChange = (e) => {p.dispatch(changeDialogMessageActionCreator(e.target.value));};

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dlgDataComp}
            </div>
            <div className={c.messages}>
                {msgDataComp}
                <div>
                    <textarea placeholder="Enter your text" value={p.newMsgText} onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;