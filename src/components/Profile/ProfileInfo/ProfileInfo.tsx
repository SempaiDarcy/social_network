import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileWall from "./ProfileWall/ProfileWall";
import {UserAvatar} from "./Avatar/UserAvatar";
import {ProfileDataFormDataType} from "../../../api/api";
import {Button} from "@material-ui/core";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (data: ProfileDataFormDataType) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const onSubmit = (data: ProfileDataFormDataType) => {
        props.saveProfile(data)
        setEditMode(false)
    }
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileWall/>
            <div className={s.avatarContainer}>
                <UserAvatar img={props.profile.photos.large}
                            savePhoto={props.savePhoto}
                            size={200}
                            isOwner={props.isOwner}
                />
                <div className={s.infoContainer}>
                    <div className={s.Name}><h3>Имя: {props.profile.fullName}</h3></div>
                    <ProfileStatusWithHooks status={props.status}
                                            updateStatus={props.updateStatus}/>
                    <h3>{editMode
                        ? <ProfileForm onSubmit={onSubmit} initialValues={props.profile}/>
                        : <ProfileData profile={props.profile}/>}</h3>
                    {props.isOwner && !editMode
                        && <Button onClick={() => setEditMode(true)}
                                   variant='contained'
                                   color='primary'
                                   className={s.editButton}
                        >
                            Edit
                        </Button>}
                </div>
            </div>
            {/*<div>*/}
            {/*    <table>*/}
            {/*        <tbody>*/}
            {/*        <tr>*/}
            {/*            <td className={s.avatarContainer}>*/}
            {/*                <img className={s.avatarImage}*/}
            {/*                     src={props.profile.photos.large !== null ? props.profile.photos.large : "https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"}*/}
            {/*                     alt="avatar"/>*/}
            {/*            </td>*/}
            {/*            <td className={s.dataContainer}>*/}
            {/*                <div className={s.name}>Name: {props.profile.fullName}</div>*/}
            {/*                <div className={s.data}>{props.profile.aboutMe}</div>*/}
            {/*                <div className={s.data}>{props.profile.contacts.github}</div>*/}
            {/*                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
        </div>
    );
};