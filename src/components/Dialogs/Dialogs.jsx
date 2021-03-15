import c from "./Dialogs.module.css";
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogs = [
        {id:1, name:"Ivan"},
        {id:2, name:"Zorro"},
        {id:3, name:"Clain"},
        {id:4, name:"Mike"},
        {id:5, name:"Ramirez"},
    ];

    const messages = [
        {id:1, message:"Hello!"},
        {id:1, message:"Hey you!"},
        {id:1, message:"Yo!"},
    ];

    const dlgDataComp = dialogs.map(dlg => <OneDialog name={dlg.name} id={dlg.id}/>);
    const msgDataComp = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dlgDataComp}
            </div>
            <div className={c.messages}>
                {msgDataComp}
            </div>
        </div>
    );
};

export default Dialogs;