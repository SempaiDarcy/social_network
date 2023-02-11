import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {DialogType} from "../Dialogs";
import {sendMessageDialogs, updateMessageDialogs} from "../../../redux/messagesPage-reducer";


type DialogMessageType = {
    data: DialogType
    dispatch: (action: any) => void
}
export const DialogMessage = (props: DialogMessageType) => {
    let newMessage = props.data.newMessageText
    const addMessage = () => {
        if (newMessage.trim() !== '') {
            props.dispatch(sendMessageDialogs())
        }
    }
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.target?.value
        if (newMessage) {
            let action = updateMessageDialogs(newMessage)
            props.dispatch(action)
        }
    }
    return (
        <div className={s.messages}>
            {props.data.messages.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
            <textarea value={newMessage} onChange={onChangeTextarea}></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
};

