import React from 'react';
import s from './ProfileInfo.module.css'
import wall from '../../../picture/pustynya.jpg'
type ProfileInfoType = {
    titleError: string
}
export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <div>
            <div>
                <img
                    src={wall}
                    alt={props.titleError}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};

