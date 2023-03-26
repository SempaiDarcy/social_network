import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUsers} from "../../redux/profilePage-reducer";

type ProfilePropsType = {
    profileState:ProfileUsers
}
export const Profile = (props:ProfilePropsType) => {

    // const profileInfoImg = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    const titleError = 'Image is not found'

    return (
        <div>
            <ProfileInfo profile={props.profileState} titleError={titleError}/>
            <MyPostsContainer/>
        </div>
    );
};

