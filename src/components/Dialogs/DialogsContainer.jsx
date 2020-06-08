import React from 'react';
import {sendMessageActionCreator, updateMessageTextActionCreated} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hocs/withAuthRedirect";
import {compose} from "redux";

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


export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect)
(Dialogs);