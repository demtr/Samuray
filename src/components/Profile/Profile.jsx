import pic1 from "../../img/pexels-photo-248797.jpeg";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (p) => {
debugger;
    return (
        <div>
            <img src={pic1} alt="pic"/>
            <MyPosts postList={p.state.anyPosts} addPost={p.addPost}/>
        </div>
    );
}

export default Profile;