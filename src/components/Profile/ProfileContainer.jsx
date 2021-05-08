import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator} from "../../redux/profileBlockReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    profile: state.profileBlock.profile,
    status: state.profileBlock.status,
});
const mapDispatchToProps = (dispatch) => ({
    getUserProfile: (userId) => {dispatch(getUserProfileThunkCreator(userId))},
    getUserStatus: (userId) => {dispatch(getUserStatusThunkCreator(userId))},
    updateUserStatus: (status) => {dispatch(updateUserStatusThunkCreator(status))}
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps), //#3
    // withAuthRedirect, //#2 - HOC
    withRouter //#1
)(ProfileContainer);