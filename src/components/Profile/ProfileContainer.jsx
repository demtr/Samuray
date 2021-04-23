import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileBlockReducer";
import {withRouter} from "react-router-dom";
import {userApi} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;

        userApi.setProfile(userId)
            .then((data)=>{
                this.props.setUserProfile(data);
            });
    }

    render() {
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    profile: state.profileBlock.profile
})

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter);