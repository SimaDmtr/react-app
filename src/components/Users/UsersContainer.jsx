import React from 'react';
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowIsFetching,
    unfollow
} from "../../redux/usersPageReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {withAuthRedirect} from "../Hocs/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    //Событие клика по пагинации
    onPageChanged = (currentPage) => {
        //Вызов метода из BLL->DAL для получения пользователей с помощью Ajax
        this.props.getUsers(currentPage,this.props.pageSize)
        this.props.setCurrentPage(currentPage)
    }

    //Часть жизненного цикла. вызывается сразу после монтирования (то есть, вставки компонента в DOM)
    //В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
    componentDidMount() {
        //Сюда пишем side-эффекты. Метод лежит в BLL->DAL
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    //Рендер в классовой компоненте
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
//Функция, возвращающая обьект со стейтом
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowFetching: state.usersPage.isFollowFetching
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowFetching: getIsFollowFetching(state)
    }
}

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowIsFetching,
    getUsers: requestUsers
}),withAuthRedirect)(UsersContainer)
//Коннектим mapStateToProps и mapDispatchToProps (сразу в виде объекта)  и передаём в контейнерную классовую компоненту
