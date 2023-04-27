import React from 'react';
import s from './Dialogs.module.css'
import {DialogUsers} from "./DialogComponents/DialogUsers";
import {DialogMessage} from "./DialogComponents/DialogMessage";
import {DialogType} from "../../redux/messagesPage-reducer";
import {Redirect} from "react-router-dom";

export type messageType = {
    id: string
    message: string
}
export type userNameType = {
    id: number
    userName: string
    img: string
}

type DialogsPropsType = {
    posts: DialogType
    addMessageText: () => void
    updateNewMessageText: (text: string) => void
    isAuth: boolean
}
export const Dialogs = (props: DialogsPropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <DialogUsers state={props.posts.userName}/>
            <DialogMessage posts={props.posts.messages}
                           updateNewMessageText={props.updateNewMessageText}
                           addMessageText={props.addMessageText}
                           newDialogText={props.posts.newMessageText}/>
        </div>);


};

