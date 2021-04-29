import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to="/login"/>
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;