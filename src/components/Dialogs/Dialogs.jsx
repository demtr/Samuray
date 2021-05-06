import c from "./Dialogs.module.css";
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";

const Dialogs = (p) => {
    const dlgDataComp = p.state.dialogs.map(dlg => <OneDialog key={dlg.id} name={dlg.name} id={dlg.id}/>);
    const msgDataComp = p.state.messages.map(m => <Message key={m.id} message={m.message}/>);
    const onAddMessage = () => {p.onAddMessage();};
    const onMessageChange = (e) => {p.onMessageChange(e.target.value);};

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dlgDataComp}
            </div>
            <div className={c.messages}>
                {msgDataComp}
                <div>
                    <textarea placeholder="Enter your text" value={p.state.newMsgText} onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;