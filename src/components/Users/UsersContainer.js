import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersBlock.users
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {dispatch(followAC(userId))},
        onUnFollow: (userId) => {dispatch(unfollowAC(userId))},
        getUsers: (users) => {dispatch(getUsersAC(users))}
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;