import React, {ChangeEvent, useEffect, useState} from 'react';
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
            STATUS:
            {
                !editMode &&
                <div><span onDoubleClick={activateEditMode}>{props.status||"------"}</span></div>
            }
            {
                editMode && <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={onChangeStatus}/>
                </div>
            }
        </div>
    );
};
