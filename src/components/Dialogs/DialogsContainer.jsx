import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogsPageReducer";
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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect)
(Dialogs);