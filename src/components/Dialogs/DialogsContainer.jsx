import React from 'react';
import {sendMessageActionCreator, updateMessageTextActionCreated} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const MapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreated(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)

export default DialogsContainer;