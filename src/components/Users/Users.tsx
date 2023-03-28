import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../assets/UserPhoto.jpg";
import {NavLink} from "react-router-dom";

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
type PropsType = {
    users:UserType[]
    onPageChanged:(pageNumber:number)=>void
    pageSize:number
    totalUsersCount:number
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users: UserType[])=>void
    currentPage:number
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}
export const Users = (props:PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = [];
    for (let i = 1; i<=pagesCount;i++){
        pages.push(i)
    }
    return <div>
        <div className={s.currentPages}>
            {pages.slice(0,10).map(el => {
                return <span className={props.currentPage === el ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(el)
                             }}>{el}</span>
            })}

        </div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}><img className={s.userPhoto}
                                src={el.photos.small !== null ? el.photos.small : userPhoto} alt={''}/>
                        </NavLink>
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
}