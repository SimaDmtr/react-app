import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
    />);

    let messagesElements = state.messages.map(message => <Message
        message={message.message}/>);

    let sendMessageArea = React.createRef();

    let onSendMessageClick =()=>{
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
    };

    return (
        <div className={s.dialogs} >
            <div className={s.dialogs_list}>
                {dialogsElements}
            </div>
            <div  className={s.dialogs_area}>
                <div id="scrolledDiv" className={s.dialogs_area_list}>{messagesElements}</div>
                <label className={s.dialogs_area_textfield}>
                    <img onClick={onSendMessageClick}
                        className={s.dialogs_area_textfield__send}
                         src="https://image.flaticon.com/icons/svg/1301/1301459.svg"
                         alt=""/>
                    <textarea
                        onChange={onMessageChange}
                        ref={sendMessageArea}
                        value={state.newMessageText}
                        className={s.dialogs_area_textfield__input}/>
                </label>
            </div>
        </div>
    )
};

export default Dialogs