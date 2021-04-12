import {addMessageToDialogActionCreator, changeDialogMessageActionCreator} from "../../redux/dialogBlockReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const onAddMessage = () => {
                    store.dispatch(addMessageToDialogActionCreator());
                };
                const onMessageChange = (text) => {
                    store.dispatch(changeDialogMessageActionCreator(text));
                };
                return <Dialogs state={store.getState().dialogBlock}
                                onAddMessage={onAddMessage}
                                onMessageChange={onMessageChange}/>;
            }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;