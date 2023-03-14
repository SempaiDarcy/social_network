import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {

    // const profileInfoImg = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    const titleError = 'Image is not found'

    return (
        <div>
            <ProfileInfo titleError={titleError}/>
            <MyPostsContainer/>
        </div>
    );
};

