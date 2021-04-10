import {addMessageToDialogActionCreator, changeDialogMessageActionCreator} from "../../redux/dialogBlockReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (p) => {
    let state = p.store.getState().dialogBlock;

    const onAddMessage = () => {p.store.dispatch(addMessageToDialogActionCreator());};
    const onMessageChange = (text) => {p.store.dispatch(changeDialogMessageActionCreator(text));};

    return (
        <Dialogs state={state} onAddMessage={onAddMessage} onMessageChange={onMessageChange}/>
    );
};

export default DialogsContainer;