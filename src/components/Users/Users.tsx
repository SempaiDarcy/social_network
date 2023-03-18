import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../assets/UserPhoto.jpg'

export type UserType = {
    name: string
    id: number
    followed: boolean
    uniqueUrlName: string | null
    "photos": {
        small: null | string,
        large: null | string
    }
    "status": null,
}

export type UsersStateType = {
    users: UserType[]
}

type UsersPropsType = {
    users: UserType[];
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items);
        })

    }
    return <div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;