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
    let dialogs = [
        {id:1,name:'Walter Wait'},
        {id:2,name:'Jesse Pinkman'},
        {id:3,name:'Hank Schreider'},
        {id:4,name:'Soul Goodman'},
    ]
    let messages = [
        {message:'Hi'},
        {message:'How are you?'},
        {message:'I am fine'}]
    let dialogsElements = dialogs.map((el)=>{
        return <DialogItem id={el.id} name={el.name}/>
    })
    let messagesElements = messages.map(el=>{
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