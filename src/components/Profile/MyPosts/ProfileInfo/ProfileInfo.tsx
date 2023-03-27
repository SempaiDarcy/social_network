import React from 'react';
import s from './ProfileInfo.module.css'
import wall from '../../../assets/picture/pustynya.jpg'
import {ProfileUsers} from "../../../../redux/profilePage-reducer";
import Preloader from "../../../common/Preloader/Preloader";
import user from './../../../assets/UserPhoto.jpg'
type ProfileInfoType = {
    titleError: string
    profile:ProfileUsers
}
export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile){
         return <Preloader/>
    }

    return (
        <div>
            <div className={s.wall}>
                <img
                    src={wall}
                    alt={props.titleError}/>
            </div>
            <h1>FullName: {props.profile.fullName}</h1>
            <div className={s.descriptionBlock}>
                {props.profile.photos.small? <img className={s.userPhoto} src={props.profile.photos.small} alt={''}/>:<img className={s.userPhoto} src={user} alt={'image not found'}/>}
                <div>
                    <h2>Oбо мне:</h2>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
};

