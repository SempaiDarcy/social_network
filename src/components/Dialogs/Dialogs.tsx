import s from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {ActionDispatchType, addMessageAC, DialogType, MessageType} from "../../redux/store";
import {useRef, useState} from "react";

type DialogsPropsType = {
    dialogsData: DialogType[];
    messagesData: MessageType[]
    dispatch:(actions:ActionDispatchType)=>void
};
export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState("")
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        let text = newMessageElement.current?.value;
        console.log(text)
        if(text!==undefined) {
            props.dispatch(addMessageAC(text))
            setMessageText("")
        }
    }
    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.target.value)
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
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
};
