import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profileBlockReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

// Добавили функционал redirect на страницу login в случае неавторизованного
// пользователя с применением ф-ции HOC
const ProfileContainerWithRouterAndAuthRedirect = withAuthRedirect(ProfileContainerWithRouter);

export default connect(mapStateToProps, {getUserProfileThunkCreator})(ProfileContainerWithRouterAndAuthRedirect);