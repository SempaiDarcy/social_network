import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemsProps = {
    id: string
    name: string
    avatar: string
    key: string
}

export const DialogsItems = (props: DialogsItemsProps) => {
    return (
        <div className={s.dialogsItems}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
                <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            </NavLink>

        </div>
    )
}
