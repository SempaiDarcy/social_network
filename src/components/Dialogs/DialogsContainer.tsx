import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {Action, Dispatch} from "redux";
import {sendMessageDialogs, updateMessageDialogs} from "../../redux/messagesPage-reducer";

const mapStateToProps = (state:AppRootStateType) =>{
    return{
        posts:state.messagesPage
    }
}
const mapDispatchToProps = (dispatch:  Dispatch<Action>) => {
    return {
        addMessageText: () => {
            dispatch(sendMessageDialogs())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateMessageDialogs(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

