import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav
        className={s.nav}>
        <div
            className={s.item}>
            <NavLink
                to="/profile"
                activeClassName={s.active}>Профиль</NavLink>
        </div>
        <div
            className={`${s.item} ${s.active}`}>
            <NavLink
                to="/dialogs"
                activeClassName={s.active}>Диалоги</NavLink>
        </div>
        <div
            className={s.item}>
            <NavLink
                to="/news"
                activeClassName={s.active}>Новости</NavLink>
        </div>
        <div
            className={s.item}>
            <NavLink
                to="/users"
                activeClassName={s.active}>Пользователи</NavLink>
        </div>
        <div
            className={s.item}>
            <NavLink
                to="">Музыка</NavLink>
        </div>
        <div
            className={s.item}>
            <NavLink
                to="">Настройки</NavLink>
        </div>
    </nav>
}

export default Navbar;