import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    console.log(props)
    return (
        <div className={s.item}>
            <img src='https://image.flaticon.com/icons/svg/527/527489.svg'/>
            {props.message}
            <div>
                <div className={s.likes_wrapper}><span>Мне нравится</span>
                    <pre>{props.like_counts}</pre>
                </div>
            </div>
        </div>
    )
}

export default Post;