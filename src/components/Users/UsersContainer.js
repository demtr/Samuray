import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    getUsersAC,
    toggleFetchingAC,
    setNumberOfUsersAC,
    setPageNumberAC,
    unfollowAC
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    // Метод componentDidMount вызывается только 1 раз после отрисовки компоненты
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.toggleFetching(false);
                this.props.getUsers(response.data.items);
                this.props.setNumberOfUsers(response.data.totalCount);
            });
    }

    goToPage = (page) => {
        this.props.setPageNumber(page);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.toggleFetching(false);
                this.props.getUsers(response.data.items);
                this.props.setNumberOfUsers(response.data.totalCount);
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totUsers={this.props.totUsers}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onFollow={this.props.onFollow}
                   onUnFollow={this.props.onUnFollow}
                   goToPage={this.goToPage}
            /></>;

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersBlock.users,
        totUsers: state.usersBlock.totUsers,
        currentPage: state.usersBlock.currentPage,
        pageSize: state.usersBlock.pageSize,
        isFetching: state.usersBlock.isFetching
    };
}

export default connect(mapStateToProps, {
    onFollow: followAC,
    onUnFollow: unfollowAC,
    getUsers: getUsersAC,
    setNumberOfUsers: setNumberOfUsersAC,
    setPageNumber: setPageNumberAC,
    toggleFetching: toggleFetchingAC
})(UsersContainer);