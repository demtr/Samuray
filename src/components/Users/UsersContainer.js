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
import Preloader from "../common/Preloader";
import {userApi} from "../../api/api";

class UsersContainer extends React.Component {
    // Метод componentDidMount вызывается только 1 раз после отрисовки компоненты
    componentDidMount() {
        this.props.toggleFetching(true);
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toggleFetching(false);
            this.props.getUsers(data.items);
            this.props.setNumberOfUsers(data.totalCount);
        });
    }

    goToPage = (page) => {
        this.props.setPageNumber(page);
        this.props.toggleFetching(true);
        userApi.getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.toggleFetching(false);
                this.props.getUsers(data.items);
                this.props.setNumberOfUsers(data.totalCount);
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