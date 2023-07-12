import React from 'react';
import wall from "../../../images/wall.jpg";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";

type ProfileInfoPropsType = {
    profile:ProfileType
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <div className={`${s.img} ${s.hidden}`}>
                    <img src={wall} alt="wall"/>
                </div>
            </div>
            <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className={s.avatarContainer}>
                                <img className={s.avatarImage} src={props.profile.photos.large} alt="avatar"/>
                            </td>
                            <td className={s.dataContainer}>
                                <div className={s.name}>{props.profile.fullName}</div>
                                <div className={s.data}>{props.profile.aboutMe}</div>
                                <div className={s.data}>{props.profile.contacts.github}</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
};