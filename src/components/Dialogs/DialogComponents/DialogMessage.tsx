import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {messageType} from "../Dialogs";


type DialogMessageType = {
    posts:messageType[]
    updateNewMessageText:(text:string)=>void
    addMessageText:() => void
    newDialogText:string
}
export const DialogMessage = (props: DialogMessageType) => {
    const {posts,updateNewMessageText, addMessageText, newDialogText} = props
    let newText = newDialogText
    const addMessage = () => {
        if (newText.trim() !== '') {
            addMessageText()
        }
        else  {
            updateNewMessageText('')
        }
    }
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget?.value)
    }
    return (
        <div className={s.messages}>
            {props.posts.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
            <textarea value={newText} onChange={onChangeTextarea}></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
};

