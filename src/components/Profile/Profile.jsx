import pic1 from "../../img/pexels-photo-248797.jpeg";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img src={pic1} alt="pic"/>
            <MyPosts/>
        </div>
    );
}

export default Profile;