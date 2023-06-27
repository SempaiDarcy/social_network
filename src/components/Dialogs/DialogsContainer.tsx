import React from 'react';
import {Dialogs} from "./Dialogs";
import {ActionDispatchType, DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogs:DialogsPageType;
    dispatch:(actions:ActionDispatchType)=>void
}
export const DialogsContainer = (props:DialogsPropsType) => {
    return <Dialogs dialogsData={props.dialogs.dialogs} messagesData={props.dialogs.messages} dispatch={props.dispatch}/>}