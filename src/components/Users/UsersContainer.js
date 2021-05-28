import {connect} from "react-redux";
import Users from "./Users";
import {
    setPageNumberAC,
    getUsersThunkCreator, unfollow, follow
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowButtonFetching, getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    // Метод componentDidMount вызывается только 1 раз после отрисовки компоненты
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    goToPage = (page) => {
        this.props.setPageNumber(page);
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(page, pageSize);
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

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totUsers: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followButtonFetching: getFollowButtonFetching(state)
    };
}

export default compose(
    connect(mapStateToProps, {
        setPageNumber: setPageNumberAC,
        getUsersThunkCreator,
        unfollow, follow
    }),
    withAuthRedirect
)(UsersContainer);