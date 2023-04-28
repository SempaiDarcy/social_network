import React, {FC} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {MessageFormDataType, MessageReduxForm} from "./MessageForm";

export type DialogsProps = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    sendMessage: (message: string) => void
}
export type DialogsDataType = {
    id: string
    name: string
    avatar: string
}
export type MessagesDataType = {
    id: string
    message: string
    avatar?: string
}

export const Dialogs: FC<DialogsProps> = ({
                                              dialogsData,
                                              messagesData,
                                              sendMessage
                                          }) => {

    const sendMessageHandler = (values: MessageFormDataType) => {
        sendMessage(values.message)
    }
    return (
        <div className="content">
            <div className={s.dialogsContainer}>
                <div className={s.sidebar}>

                </div>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogsData.map(elem => {
                            return (
                                <DialogsItems id={elem.id} name={elem.name} avatar={elem.avatar} key={elem.id}/>
                            )
                        })}

                    </div>
                    <div className={s.dialogsMessages}>
                        {messagesData.map(elem => {
                            return (
                                <DialogsMessages
                                    message={elem.message}
                                    avatar={elem.avatar}
                                    key={elem.id}
                                />
                            )
                        })}
                    </div>
                    <div className={s.addDialogContainer}>
                        <MessageReduxForm onSubmit={sendMessageHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}




