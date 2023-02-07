import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";


type DialogsPropsType = {
    state: {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
}
const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((el)=>{
        return <DialogItem id={el.id} name={el.name}/>
    })
    let messagesElements = props.state.messages.map(el=>{
        return <Message message={el.message}/>
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;