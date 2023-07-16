import s from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {DialogType, MessageType} from "../../redux/store";
import {ChangeEvent, useRef, useState} from "react";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogsData: DialogType[];
    messagesData: MessageType[]
    sendMessage:(message:string) => void
    isAuth:boolean
};
export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState("")
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const sendMessageHandler = () => {
        if(messageText.trim()!==''){
            props.sendMessage(messageText)
            setMessageText('')
        }
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.target.value)
    }
    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
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
            <div>
                <textarea
                    value={messageText}
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    placeholder="Enter your message"
                ></textarea>
                <button onClick={sendMessageHandler}>Add Message</button>
            </div>
        </div>
    );
};
