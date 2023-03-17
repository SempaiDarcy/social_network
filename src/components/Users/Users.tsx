import React from 'react';
import s from './Users.module.css'
import {v1} from "uuid";

export type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}

export type UsersStateType = {
    users:UserType[]
}

type UsersPropsType = {
    users: UserType[];
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}
const Users = (props: UsersPropsType) => {
    if(props.users.length===0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://uznayvse.ru/person/nagiev/nagiev01.jpg',
                followed: true,
                fullName: 'Walter Wait',
                status: 'I am a boss',
                location: {city: 'Albucerke', country: 'USA'}
            },
            {
                id: v1(),
                photoUrl: 'https://uznayvse.ru/person/nagiev/nagiev01.jpg',
                followed: false,
                fullName: 'Jessy Pinkman',
                status: 'I am a assistant',
                location: {city: 'Albucerke', country: 'USA'}
            },
            {
                id: v1(),
                photoUrl: 'https://uznayvse.ru/person/nagiev/nagiev01.jpg',
                followed: true,
                fullName: 'Hank Schreider',
                status: 'I am a boss',
                location: {city: 'Albucerke', country: 'USA'}
            },
            {
                id: v1(),
                photoUrl: 'https://uznayvse.ru/person/nagiev/nagiev01.jpg',
                followed: false,
                fullName: 'Soul Goodman',
                status: 'I am a boss of the boss',
                location: {city: 'Albucerke', country: 'USA'}
            },
        ])
    }
    return <div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={el.photoUrl}/>
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
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.city}</div>
                        <div>{el.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;