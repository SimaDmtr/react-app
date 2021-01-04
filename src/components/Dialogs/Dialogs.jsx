import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      photo={dialog.photo}
      name={dialog.name}
      id={dialog.id}
      status={dialog.status}
    />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>{dialogsElements}</div>
      <div className={s.dialogs_area}>
        <div id="scrolledDiv" className={s.dialogs_area_list}>
          {messagesElements}
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
