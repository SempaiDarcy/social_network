import React, {FC, useState} from "react";
import s from "./Profile.module.css";
import {ProfileUserType} from "../../../bll/types";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./Status/ProfileStatusWithHooks";
import {UserAvatar} from "./Avatar/UserAvatar";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormDataType, ProfileForm} from "./ProfileDataForm/ProfileDataForm";
import {Button} from "@material-ui/core";

type ProfileInfoProps = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (data: ProfileDataFormDataType) => void
}
export const Profile: FC<ProfileInfoProps> = ({
                                                  profile,
                                                  savePhoto,
                                                  status,
                                                  updateUserStatus,
                                                  isOwner,
                                                  saveProfile
                                              }) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const onSubmit = (data: ProfileDataFormDataType) => {
        saveProfile(data)
        setEditMode(false)
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.avatarContainer}>
                <UserAvatar img={profile.photos.large}
                            savePhoto={savePhoto}
                            size={200}
                            isOwner={isOwner}/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.Name}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status}
                                        updateUserStatus={updateUserStatus}/>
                {editMode
                    ? <ProfileForm onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile}/>}
                {isOwner && !editMode
                    && <Button onClick={() => setEditMode(true)}
                               variant='contained'
                               color='primary'
                               className={s.editButton}
                    >
                        Edit
                    </Button>}
            </div>
        </div>
    )
}