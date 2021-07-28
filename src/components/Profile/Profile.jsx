import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateUserStatus}
                         isMe={props.profile?.userId === props.myUserId}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         editMode={props.editMode}
                         setEditMode={props.setEditProfile}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;