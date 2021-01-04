import React from 'react';
import s from './Dialogitem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/profile/" + props.id;
    const addClass = () => {
    };
    let status = props.status;
    return (
        <div className={s.dialog_item}
            onClick={addClass}>
            <img
                className={s.dialog_item_photo}
                src={props.photo}
                alt="title"/>
            <div className={s.dialog_item_body}>
                <NavLink
                    className={s.dialog_item_body_title}
                    to={path}>{props.name}</NavLink>

                <span className={['status', status].join(' ')}>{status}</span>
            </div>
        </div>
    )
};

export default DialogItem;