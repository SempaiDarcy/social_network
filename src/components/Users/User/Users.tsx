import s from "./User.module.css";
import React from "react";
import {UsersType} from "../../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UserPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void
}
export const Users = (props: UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div className={s.usersContainer}>
                <div className={s.pageLists}>
                    {pages.map((el, index) => {
                        return (
                            <button key={index} onClick={() => {
                                props.onPageChanged(el)
                            }} className={props.currentPage === el ? s.selectedPage : ''}>{el}</button>)
                    })}
                </div>
                <div className={s.users}>
                    {props.users.map(el => {
                        return (
                            <div className={s.user} key={el.id}>
                                <div>Full name: <span>{el.name}</span></div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={s.avatar}
                                         src={el.photos.small !== null ? el.photos.small : "https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"}
                                         alt=""/>
                                </NavLink>
                                {/*<div>Status: <span>{el.status}</span></div>*/}
                                {/*<div>Country: <span>{el.location.country}</span></div>*/}
                                {/*<div>City: <span>{el.location.city}</span></div>*/}
                                <div>{el.followed ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                            withCredentials:true,
                                            headers:{
                                                'API-KEY':'cb518e47-d2d9-40b9-aefd-dfe61cc62153'
                                            }
                                        }).then(res=>{
                                            if(res.data.resultCode===0) {
                                                props.unfollow(el.id)
                                            }
                                        })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{
                                            withCredentials:true,
                                            headers:{
                                                'API-KEY':'cb518e47-d2d9-40b9-aefd-dfe61cc62153'
                                            }
                                        }).then(res=>{
                                            if(res.data.resultCode===0) {
                                                props.follow(el.id)
                                            }
                                        })

                                    }}>Follow</button>}</div>
                            </div>)
                    })}
                </div>
            </div>
        </div>)
}