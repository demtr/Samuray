import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profileBlockReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;

        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    profile: state.profileBlock.profile
})

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileThunkCreator})(ProfileContainerWithRouter);