import React from 'react';
import s from './Dialogs.module.css'
import {DialogUsers} from "./DialogComponents/DialogUsers";
import {DialogMessage} from "./DialogComponents/DialogMessage";

export type messageType = {
    id: number
    message: string
}
export type userNameType = {
    id: number
    userName: string
    img: string
}
export type DialogType = {
    messages: messageType[]
    userName: userNameType[]
    newMessageText: string
}
type DataType = {
    data: DialogType
    dispatch: (action: any) => void
}
export const Dialogs = (props:DataType) => {
    return (
        <div className={s.dialogs}>
            <DialogUsers userName={props.data.userName}/>
            <DialogMessage data={props.data}
                           dispatch={props.dispatch}
            />
        </div>
    );
};

