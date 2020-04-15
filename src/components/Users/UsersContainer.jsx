import React from 'react';

import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersPageReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.totalCount)
                this.props.setTotalUsersCount(response.data.totalCount / 100)
            })
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
};

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) =>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count) =>{
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);