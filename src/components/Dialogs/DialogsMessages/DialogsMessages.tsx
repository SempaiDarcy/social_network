import s from "./DialogsMessages.module.css";

import React from "react";


type DialogsMessagesProps = {
    message: string
    avatar?: string
    key: string
}
export const DialogsMessages = (props: DialogsMessagesProps) => {
    return (
            <div className={s.messageContainer}>
                {!!props.avatar?<img className={s.avatar} src={props.avatar} alt={'avatar'}/>
                    : <img className={s.avatar} src="https://avatars.dzeninfra.ru/get-zen_doc/1709006/pub_607b051b4e4db437d9a46222_607b052d90024f5c10a46608/scale_1200" alt="joj"/>}
                <div className={s.messageBox}>
                    <span className={s.message}>{props.message}</span>
                </div>
            </div>
    )
}