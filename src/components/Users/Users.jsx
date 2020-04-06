import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'




class Users  extends React.Component{
    getUsers = () =>{
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }


    render() {
        return (
            <table className={s.users_wrap}>
                <button onClick={this.getUsers}>GetUsers</button>
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
                        <td>{u.id}</td>
                        <td className={s.user_list_item_profile}>
                            <div className={s.user_list_item_profile_photo}>
                                <img className={s.user_list_item_info} src={u.photos.small !== null ? u.photos.small : 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'} alt={u.fullName}/>
                            </div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Отписаться</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Подписаться</button>}
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
            </table>
        )
    }
};

export default Users;