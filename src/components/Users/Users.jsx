import React from "react";
import {Button, ButtonGroup, CardColumns, CardDeck, CardGroup, Image, Table} from "react-bootstrap";
import user from "../../user.png";
import s from "./Users.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

class Users extends React.Component {
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return this.props.isFetching ? <LinearProgress variant="query"/>
            : <>
                <div className="row ">
                    {this.props.users.map(u =>
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
                    <ButtonGroup className="mr-2 ">
                        {pages.map(page => {
                            return <Button variant="secondary" onClick={() => {
                                this.props.onPageChanged(page)
                            }} className={this.props.currentPage === page && s.selected}>{page}</Button>
                        })}
                    </ButtonGroup>
                </div>

            </>
    }
}

export default Users;