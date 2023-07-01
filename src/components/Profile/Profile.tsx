import React from "react";
import {ActionDispatchType, PostType, UserType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    postData: PostType[];
    user: UserType
    dispatch: (action: ActionDispatchType) => void;
    newPostText: string
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
            <MyPosts postData={props.postData} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </div>
    );
};
