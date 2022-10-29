import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props:any) => {
    let path = '/dialogs/' + props.id
   return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props:any) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = 'Walter Wait' id = '1'/>
                <DialogItem name = 'Jesse Pinkman' id = '2'/>
                <DialogItem name = 'Hank Schreider' id = '3'/>
                <DialogItem name = 'Soul Goodman' id = '4'/>
            </div>
            <div className={s.messages}>
                <Message message = 'Hi'/>
                <Message message = 'How are you?'/>
                <Message message = 'I am fine'/>
            </div>
        </div>
    );
};

export default Dialogs;