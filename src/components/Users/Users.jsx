import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import {Button, ButtonGroup, Image, Table} from "react-bootstrap";
import user from '../../user.png'



class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <Table  bordered hover variant="light">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Профиль</th>
                        <th>Имя</th>
                        <th>Статус</th>
                        <th>Страна/город</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map(u =>
                        <tr key={u.id}>
                            <td >{u.id}</td>
                            <td className={'d-flex flex-column align-items-center'}>
                                <div >
                                    <Image  src={u.photos.small !== null ? u.photos.small : user} alt={u.fullName}/>
                                </div>
                                {u.followed
                                    ?
                                    <Button className={s.follow_button} variant="light" onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Отписаться</Button>
                                    :
                                    <Button className={s.follow_button} variant="light" onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Подписаться</Button>}
                            </td>
                            <td>
                                <p>{u.name}</p>
                            </td>
                            <td>
                                <p>{u.status}</p>
                            </td>
                            <td>
                                <p>{"u.location.country"}</p>
                                <p>{"u.location.city"}</p>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                <div className="container-fluid d-flex justify-content-center">
                    <ButtonGroup className="mr-2 ">
                        {pages.map(page => {
                            return <Button variant="secondary" onClick={() => {
                                this.onPageChanged(page)
                            }} className={this.props.currentPage === page && s.selected}>{page}</Button>
                        })}
                    </ButtonGroup>
                </div>
            </>
        )
    }
};

export default Users;