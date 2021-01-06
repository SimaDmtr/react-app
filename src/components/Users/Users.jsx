import React from "react";
import {Button, ButtonGroup, CardColumns, CardDeck, CardGroup, Image, Table, Pagination} from "react-bootstrap";
import user from "../../user.png";
import s from "./Users.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

class Users extends React.Component {
    render() {

        //Округляем полученное число страниц в большую сторону, если остался остаток от деления
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        //Создаём пустой массив пагинации
        let pages = [];

        //Циклом проходим по количестку страниц и пушим число в массив
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return this.props.isFetching ? <LinearProgress variant="query"/>
            : <>
                <div className="row ">
                    {this.props.users.map(u =>
                        //Мапим всех полученных пользователей
                        <div
                            className="text-center col-md-6"
                            key={u.id}
                            style={{'border': '1px solid #323232', 'borderRadius': '9px'}}
                        >
                            <NavLink to={'/profile/' + u.id}>
                                <Image style={{padding: '1.25rem'}}
                                       roundedCircle variant="top"
                                       src={u.photos.small !== null ? u.photos.small : user}
                                       alt={u.fullName}/></NavLink>
                            <p>{u.name}</p>
                            {u.followed
                                //В зависимости от статуса подписки отображаем соответствующую кнопку и вешаем метод из санок, который лежит в BLL->DAL
                                ? <Button className={s.follow_button} variant="light" onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>{this.props.isFollowFetching.some(id => id === u.id) ?
                                    <CircularProgress/> : 'Отписаться'}</Button>

                                : <Button className={s.follow_button} variant="light" onClick={() => {
                                    this.props.follow(u.id)
                                }}>{this.props.isFollowFetching.some(id => id === u.id) ?
                                    <CircularProgress/> : 'Подписаться'}</Button>}

                        </div>
                    )}
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <Pagination className="mr-2 ">
                        {pages.map(page => {
                            //Мапим массив номеров страниц и выводим ввиде кнопок
                            return <Pagination.Item key={page} onClick={() => {
                                //Передаём в событие номер кликнутой страницы, этот же номер пишем внутри кнопки
                                this.props.onPageChanged(page)
                            }} active={this.props.currentPage === page && true}>{page}</Pagination.Item>
                        })}
                    </Pagination>
                </div>

            </>
    }
}

export default Users;