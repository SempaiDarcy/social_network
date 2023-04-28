import React from "react";
import {PostDataType} from "./MyPosts/MyPosts";
import s from './Content.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile/Profile";
import {ProfileUserType} from "../../bll/types";
import {ProfileDataFormDataType} from "./Profile/ProfileDataForm/ProfileDataForm";


type ContentProps = {
    postData: PostDataType[]
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (data: ProfileDataFormDataType) => void
    isOwner: boolean
}


function Content(props: ContentProps) {
    return (
        <div className='content'>
            <div >
                <img className={s.headerContent} alt='big content'
                     src='https://img5.goodfon.ru/wallpaper/nbig/5/2e/gory-skaly-vodoem-les-otrazhenie-bereg.jpg'/>
            </div>
            <div className={s.containerInfoAndPosts}>
                <div className={s.containerInfo}>
                    <Profile profile={props.profile}
                             status={props.status}
                             isOwner={props.isOwner}
                             savePhoto={props.savePhoto}
                             saveProfile={props.saveProfile}
                             updateUserStatus={props.updateUserStatus}/>
                </div>
                <div className={s.containerPosts}>
                    <MyPostsContainer/>
                </div>

            </div>
        </div>
    )
}

export default Content;