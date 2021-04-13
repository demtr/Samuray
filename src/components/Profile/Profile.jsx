import pic1 from "../../img/pexels-photo-248797.jpeg";
import c from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <img src={pic1} alt="pic"/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;