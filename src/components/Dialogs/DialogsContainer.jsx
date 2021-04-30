import {addMessageToDialogActionCreator, changeDialogMessageActionCreator} from "../../redux/dialogBlockReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps), //#
    withAuthRedirect, //#1
)(Dialogs);