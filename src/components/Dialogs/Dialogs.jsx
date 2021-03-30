import c from "./Dialogs.module.css";
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";

const Dialogs = (p) => {
    const dlgDataComp = p.state.dialogs.map(dlg => <OneDialog name={dlg.name} id={dlg.id}/>);
    const msgDataComp = p.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dlgDataComp}
            </div>
            <div className={c.messages}>
                {msgDataComp}
                <textarea/>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;