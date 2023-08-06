import React from 'react';
import s from "../ProfileInfo.module.css";
import wall from "../../../../images/wall.jpg";

const ProfileWall = () => {
    return (
        <div>
            <div className={`${s.img} ${s.hidden}`}>
                <img src={wall} alt="wall"/>
            </div>
        </div>
    );
};

export default ProfileWall;