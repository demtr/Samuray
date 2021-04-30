import {addMessageToDialogActionCreator, changeDialogMessageActionCreator} from "../../redux/dialogBlockReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        state: state.dialogBlock
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageToDialogActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(changeDialogMessageActionCreator(text));
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// Добавили функционал redirect на страницу login в случае неавторизованного
// пользователя с применением ф-ции HOC
const DialogsContainerWithAuthRedirect = withAuthRedirect(DialogsContainer);

export default DialogsContainerWithAuthRedirect;