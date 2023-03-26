import React from 'react';
import s from './ProfileInfo.module.css'
import wall from '../../../picture/pustynya.jpg'
import {ProfileUsers} from "../../../../redux/profilePage-reducer";
import Preloader from "../../../common/Preloader/Preloader";
type ProfileInfoType = {
    titleError: string
    profile:ProfileUsers
}
export const ProfileInfo = (props:ProfileInfoType) => {
    // if(!props.profile){
    //      return <Preloader/>
    // }

    return (
        <div>
            <div>
                <img
                    src={wall}
                    alt={props.titleError}/>
            </div>
            <h1>{props.profile.fullName}</h1>
            <div className={s.descriptionBlock}>
                <img  src={props.profile.photos.small} alt={''}/>
                <div>
                    <h2>Oбо мне:</h2>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
};

