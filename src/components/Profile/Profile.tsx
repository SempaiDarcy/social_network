import React from "react";
import {PostType, UserType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    user: UserType
    postData:PostType[]
};
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                id={props.user.id}
                name={props.user.name}
                city={props.user.city}
                site={props.user.site}
                avatar={props.user.avatar}
            />
            <MyPosts postData={props.postData}/>
        </div>
    );
};
