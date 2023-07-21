import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";

type ProfilePropsType = {
    profile:ProfileType,
    status:string
    updateStatus:(status:string)=>void
    authUserId:number|null,
    isAuth:boolean
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
        />
            <MyPostsContainer/>
        </div>
    )
};
