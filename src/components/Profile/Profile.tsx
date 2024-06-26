import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";
import {ProfileDataFormDataType} from "../../api/api";
type ProfilePropsType = {
    profile:ProfileType,
    status:string
    updateStatus:(status:string)=>void
    authUserId:number|null,
    savePhoto: (photo: File) => void,
    saveProfile: (data: ProfileDataFormDataType) => void,
    isAuth:boolean
    isOwner: boolean
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                            isOwner={props.isOwner} savePhoto={props.savePhoto}
                            saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
};
