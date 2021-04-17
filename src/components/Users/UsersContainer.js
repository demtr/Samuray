import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersAC, setNumberOfUsersAC, setPageNumberAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersBlock.users,
        totUsers: state.usersBlock.totUsers,
        currentPage: state.usersBlock.currentPage,
        pageSize: state.usersBlock.pageSize
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {dispatch(followAC(userId))},
        onUnFollow: (userId) => {dispatch(unfollowAC(userId))},
        getUsers: (users) => {dispatch(getUsersAC(users))},
        setNumberOfUsers: (number) => {dispatch(setNumberOfUsersAC(number))},
        setPageNumber: (number) => {dispatch(setPageNumberAC(number))}
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;