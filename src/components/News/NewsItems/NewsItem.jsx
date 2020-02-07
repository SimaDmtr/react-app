import React from 'react';
import s from './Newsitem.module.css';
import {NavLink} from "react-router-dom";


const News = (props) => {
    let path = "/news/" + props.id;
    console.log(props)
    return (
        <div className={s.news_item}>
            <NavLink to={path} className={s.news_title}>{props.created}</NavLink>
            <div className={s.news_item_content}>{props.content}</div>
        </div>
    )
}

export default News;