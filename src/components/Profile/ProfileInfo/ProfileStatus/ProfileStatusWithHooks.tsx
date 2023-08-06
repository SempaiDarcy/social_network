import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatusWithHooks.module.css'
import {TextField} from "@material-ui/core";
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {
    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const activateEditMode = () => {
        return setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            <h3 className={s.status}>STATUS:
                {
                    !editMode &&
                    <div><span onDoubleClick={activateEditMode}>{props.status || "------"}</span></div>
                }
                {
                    editMode && <div>
                        <TextField autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={onChangeStatus}/>
                    </div>
                }</h3>
        </div>
    );
};
