import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem
        photo={dialog.photo}
        name={dialog.name}
        id={dialog.id}
        status={dialog.status}
    />);

    let messagesElements = state.messages.map(message => <Message
        message={message.message}/>);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    };

    return (
        <div className={s.dialogs} >
            <div className={s.dialogs_list}>
                {dialogsElements}
            </div>
            <div  className={s.dialogs_area}>
                <div id="scrolledDiv" className={s.dialogs_area_list}>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm  = (props) =>{
    return (
        <form className={s.dialogs_area_textfield} onSubmit={props.handleSubmit}>

            <Field component="textarea" name="newMessageBody" placeholder="Enter your message"
                className={s.dialogs_area_textfield__input}/>
                <button className={s.dialogs_area_textfield__send}><img src="https://image.flaticon.com/icons/svg/1301/1301459.svg" alt=""/></button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;