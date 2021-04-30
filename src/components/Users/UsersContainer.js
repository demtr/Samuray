import {connect} from "react-redux";
import Users from "./Users";
import {
    setPageNumberAC,
    getUsersThunkCreator, unfollow, follow
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    // Метод componentDidMount вызывается только 1 раз после отрисовки компоненты
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    goToPage = (page) => {
        this.props.setPageNumber(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totUsers={this.props.totUsers}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   followButtonFetching={this.props.followButtonFetching}
                   goToPage={this.goToPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            /></>;

    }
}

// Добавили функционал redirect на страницу login в случае неавторизованного
// пользователя с применением ф-ции HOC
const UsersContainerWithRedirect = withAuthRedirect(UsersContainer);

let mapStateToProps = (state) => {
    return {
        users: state.usersBlock.users,
        totUsers: state.usersBlock.totUsers,
        currentPage: state.usersBlock.currentPage,
        pageSize: state.usersBlock.pageSize,
        isFetching: state.usersBlock.isFetching,
        followButtonFetching: state.usersBlock.followButtonFetching
    };
}

export default connect(mapStateToProps, {
    setPageNumber: setPageNumberAC,
    getUsersThunkCreator,
    unfollow, follow
})(UsersContainerWithRedirect);