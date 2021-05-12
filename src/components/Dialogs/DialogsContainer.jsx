import {addMessageToDialogActionCreator} from "../../redux/dialogBlockReducer";
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
        onAddMessage: (msg) => {
            dispatch(addMessageToDialogActionCreator(msg));
        }
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps), //#
    withAuthRedirect, //#1
)(Dialogs);