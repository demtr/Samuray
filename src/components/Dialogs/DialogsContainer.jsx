import {addMessageToDialogActionCreator, changeDialogMessageActionCreator} from "../../redux/dialogBlockReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
       state: state.dialogBlock
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {dispatch(addMessageToDialogActionCreator());},
        onMessageChange: (text) => {dispatch(changeDialogMessageActionCreator(text));}
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;