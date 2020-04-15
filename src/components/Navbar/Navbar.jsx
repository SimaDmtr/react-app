import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";


const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to='/profile'>Профиль</Link>
            </div>
            <div className={s.item}>
                <Link to='/users'>Пользователи</Link>
            </div>
            <div className={s.item}>
                <Link to='/dialogs'>Диалоги</Link>
            </div>
        </nav>

    );
}

export default Navbar