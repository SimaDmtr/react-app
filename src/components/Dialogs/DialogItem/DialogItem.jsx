import React from 'react';
import s from './Dialogitem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let addClass = () =>{

    }
    return (
        <div className={`${s.dialog}`} onClick={addClass}>
            <NavLink className={s.dialog_item} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;