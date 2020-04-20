import React from "react";
import {Button, ButtonGroup, CardColumns, CardDeck, CardGroup, Image, Table} from "react-bootstrap";
import user from "../../user.png";
import s from "./Users.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import {NavLink} from "react-router-dom";
import {dark, light} from "@material-ui/core/styles/createPalette";
import Card from "react-bootstrap/Card";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return props.isFetching ? <LinearProgress variant="query"/>
        : <>
            <div className="row ">
                {props.users.map(u =>
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
                            ?<Button className={s.follow_button} variant="light" onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8fd9eb98-8a5e-46ef-8b93-d27766bdfbd8'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                        }
                                    })
                                }}>Отписаться</Button>
                            :<Button className={s.follow_button} variant="light" onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8fd9eb98-8a5e-46ef-8b93-d27766bdfbd8'
                                    }
                                })
                                    .then(response => {
                                       if(response.data.resultCode == 0){
                                           props.follow(u.id)
                                       }
                                    })
                                }}>Подписаться</Button>}
                    </div>
                )}
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <ButtonGroup className="mr-2 ">
                    {pages.map(page => {
                        return <Button variant="secondary" onClick={() => {
                            props.onPageChanged(page)
                        }} className={props.currentPage === page && s.selected}>{page}</Button>
                    })}
                </ButtonGroup>
            </div>

        </>
}

export default Users;