import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
    img: string
    titleError: string
}
export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <div>
            <div>
                <img
                    src='https://c4.wallpaperflare.com/wallpaper/316/701/142/breaking-bad-tv-wallpaper-preview.jpg'
                    alt={props.titleError}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};

