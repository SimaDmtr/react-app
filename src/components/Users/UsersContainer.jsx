import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersPageReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,{withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
                this.props.setTotalUsersCount(response.data.totalCount / 100)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);