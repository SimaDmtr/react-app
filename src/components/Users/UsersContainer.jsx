import React from 'react';
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowIsFetching,
    unfollow
} from "../../redux/usersPageReducer";
import {connect} from "react-redux";
import Users from "./Users";

class UsersContainer extends React.Component {
    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage,this.props.pageSize)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      isFollowFetching={this.props.isFollowFetching}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowFetching: state.usersPage.isFollowFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowIsFetching,
    getUsers
})(UsersContainer);