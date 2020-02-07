import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageTextActionCreated} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick =()=>{
        props.store.dispatch(sendMessageActionCreator())
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreated(text))
    };

    return (
        <Dialogs updateMessageText={onMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
};

export default DialogsContainer;