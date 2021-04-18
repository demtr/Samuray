import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersAC, setNumberOfUsersAC, setPageNumberAC, unfollowAC} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {
    // Метод componentDidMount вызывается только 1 раз после отрисовки компоненты
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.getUsers(response.data.items);
                this.props.setNumberOfUsers(response.data.totalCount);
            });
    }

    goToPage = (page) => {
        this.props.setPageNumber(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.getUsers(response.data.items);
                this.props.setNumberOfUsers(response.data.totalCount);
            });
    }

    render() {
        return <Users users={this.props.users}
                      totUsers={this.props.totUsers}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onFollow={this.props.onFollow}
                      onUnFollow={this.props.onUnFollow}
                      goToPage={this.goToPage}
        />
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);