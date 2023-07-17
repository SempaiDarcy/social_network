import React from 'react';
import wall from "../../../images/wall.jpg";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import {Loader} from "../../common/Loader/Loader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Loader/>
    }
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
                                <img className={s.avatarImage} src={props.profile.photos.large!==null?props.profile.photos.large:"https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"} alt="avatar"/>
                            </td>
                            <td className={s.dataContainer}>
                                <div className={s.name}>Name: {props.profile.fullName}</div>
                                <div className={s.data}>{props.profile.aboutMe}</div>
                                <div className={s.data}>{props.profile.contacts.github}</div>
                                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
};