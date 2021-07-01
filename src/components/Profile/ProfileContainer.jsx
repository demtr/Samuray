import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updatePhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileBlockReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.myUserId || 2;

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    profile: state.profileBlock.profile,
    status: state.profileBlock.status,
    myUserId: state.auth.userId
});

const mapDispatchToProps = (dispatch) => ({
    getUserProfile: (userId) => {
        dispatch(getUserProfileThunkCreator(userId))
    },
    getUserStatus: (userId) => {
        dispatch(getUserStatusThunkCreator(userId))
    },
    updateUserStatus: (status) => {
        dispatch(updateUserStatusThunkCreator(status))
    },
    savePhoto: (photo) => {
        dispatch(updatePhotoThunkCreator(photo))
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps), //#3
    withAuthRedirect, //#2 - HOC
    withRouter //#1
)(ProfileContainer);