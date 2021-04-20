import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileBlockReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId || 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then((response)=>{
                this.props.setUserProfile(response.data);
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