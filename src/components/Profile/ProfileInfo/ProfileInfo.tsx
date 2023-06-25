import React, { useState } from 'react';
import wall from "../../../images/wall.jpg";
import s from './ProfileInfo.module.css';
import kunai from '../../../images/kunai.png'
export const ProfileInfo = () => {
    const [showImage, setShowImage] = useState(false);

    const toggleImage = () => {
        setShowImage(!showImage);
    };
    return (
        <div>
            <div className={`${s.img} ${showImage ? '' : s.hidden}`}>
                <img src={wall} alt="wall image" />
            </div>
            <div>
                <div className={s.wallButton}>
                    <img title={showImage?'Закрыть фон':"Открыть фон"} className={s.wallButton} src={kunai} alt="kunai image" onClick={toggleImage}/>
                </div>
            </div>
        </div>
    );
};