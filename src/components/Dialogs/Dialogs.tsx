import s from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {DialogType, MessageType} from "../../redux/store";
import React from "react";
import {AddMessageFromRedux} from "./AddMessageFromRedux";

type DialogsPropsType = {
    dialogsData: DialogType[];
    messagesData: MessageType[]
    sendMessage:(message:string) => void
};
export type FormDataType = {
    message: string
}
export const Dialogs = (props: DialogsPropsType) => {
    const sendMessageHandler = (values:FormDataType) => {
        debugger
        props.sendMessage(values.message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsData.map((el) => {
                    return <Dialog key={el.id} id={el.id} name={el.name}/>;
                })}
            </div>
            <div className={s.messages}>
                {props.messagesData.map((el)=>{
                    return <span key={el.id} id={el.id}><div>{el.message}</div></span>
                })}
            </div>
            <AddMessageFromRedux onSubmit={sendMessageHandler}/>
        </div>
    );
};




