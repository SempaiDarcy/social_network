import {UsersType} from "../../../bll/types";
import s from './UserCard.module.css'
import {Button} from "@material-ui/core";
import noAvatarImg from '../../../assets/img/no_avatar_img.webp'
import {NavLink} from "react-router-dom";
import {FC} from "react";

type UserCardProps = {
    userInfo: UsersType
    followingInProgress: number[]
    setFollowTC: (userID: number) => void
    setUnFollowTC: (userID: number) => void

}
export const UserCard: FC<UserCardProps> = ({userInfo, setFollowTC, setUnFollowTC, followingInProgress}) => {
    const setFollowHandler = () => {
        setFollowTC(userInfo.id)
    }
    const setUnfollowHandler = () => {
        setUnFollowTC(userInfo.id)
    }
    const button = !userInfo.followed
        ? <Button size='small'
                  variant='outlined'
                  color='primary'
                  disabled={followingInProgress.some(id => id === userInfo.id)}
                  onClick={setFollowHandler}>
            FOLLOW
        </Button>
        : <Button size='small'
                  variant='outlined'
                  color='secondary'
                  disabled={followingInProgress.some(id => id === userInfo.id)}
                  onClick={setUnfollowHandler}>
            UNFOLLOW
        </Button>

    return (
        <div className={s.userCardContainer}>
            <div className={s.avatarAndButton}>
                <NavLink to={'/profile/' + userInfo.id}>
                    <img className={s.avatar}
                         alt={'avatar'}
                         src={userInfo.photos.large !== null ? userInfo.photos.large : noAvatarImg}/>
                </NavLink>
                {button}
            </div>
            <div className={s.userInfo}>
                <NavLink to={'/profile/' + userInfo.id}>
                    <div className={s.name}>{userInfo.name}</div>
                </NavLink>
                <div>Status: {userInfo.status}</div>
            </div>
        </div>
    )
}