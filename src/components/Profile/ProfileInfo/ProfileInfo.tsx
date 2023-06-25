import React from 'react';
import wall from "../../../images/wall.jpg";
import s from './ProfileInfo.module.css';
type ProfileInfoPropsType = {
    id:string,
    name:string,
    city:string,
    site:string
    avatar:string
}
export const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <div className={`${s.img} ${s.hidden}`}>
                    <img src={wall} alt="wall image"/>
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <td className={s.avatarContainer}>
                            <img className={s.avatarImage} src={props.avatar} alt="avatar image"/>
                        </td>
                        <td className={s.dataContainer}>
                            <div className={s.name}>{props.name}</div>
                            <div className={s.data}>{props.city}</div>
                            <div className={s.data}>{props.site}</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};