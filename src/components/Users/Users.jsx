import React from "react";
import {Button, ButtonGroup, Image, Table} from "react-bootstrap";
import user from "../../user.png";
import s from "./Users.module.css";

const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

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
                {props.users.map(u =>
                    <tr key={u.id}>
                        <td >{u.id}</td>
                        <td className={'d-flex flex-column align-items-center'}>
                            <div >
                                <Image  src={u.photos.small !== null ? u.photos.small : user} alt={u.fullName}/>
                            </div>
                            {u.followed
                                ?
                                <Button className={s.follow_button} variant="light" onClick={() => {
                                    props.unfollow(u.id)
                                }}>Отписаться</Button>
                                :
                                <Button className={s.follow_button} variant="light" onClick={() => {
                                    props.follow(u.id)
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
                            props.onPageChanged(page)
                        }} className={props.currentPage === page && s.selected}>{page}</Button>
                    })}
                </ButtonGroup>
            </div>
        </>
    )
}

export default Users;