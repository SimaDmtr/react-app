import React from 'react';
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.message_wrap}>
            <div
                style={{"background": "url('http://interesno.cc/uploads/tumb/img/201804/2_1524934501_tumb_660.jpg') no-repeat center",
                        "background-size" : "cover"
                }}
                className={s.massage_prifileImage}/>
            <div className={s.message_content}>{props.message}</div>
        </div>
    )
};


export default Message
