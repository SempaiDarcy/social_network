import React, {Component} from 'react';
import s from "./User.module.css";
import {UsersType} from "../../../redux/store";
import axios from "axios";

type UserPropsType = {
    users: UsersType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    setUsers: (users: UsersType[]) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage:(currentPage:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void
}

export class Users extends Component<UserPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
        })
    }
    // в классовой компоненте обязателен метод render() который будет возвращать тот самый jsx
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = []
        for (let i = 1; i<=pagesCount; i++) {
             pages.push(i)
        }
        return <div>
            <div className={s.usersContainer}>
                <h1>Users</h1>
                <div className={s.pageLists}>
                    {pages.map((el,index)=>{
                        return (
                            <button key={index} onClick={() => {
                                this.onPageChanged(el)
                            }} className={this.props.currentPage === el ? s.selectedPage:''}>{el}</button>)
                    })}
                </div>
                <div className={s.users}>
                    {this.props.users.map(el => {
                        return (
                            <div className={s.user} key={el.id}>
                                <div>Full name: <span>{el.name}</span></div>
                                <img className={s.avatar}
                                     src={el.photos.small !== null ? el.photos.small : "https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"}
                                     alt=""/>
                                {/*<div>Status: <span>{el.status}</span></div>*/}
                                {/*<div>Country: <span>{el.location.country}</span></div>*/}
                                {/*<div>City: <span>{el.location.city}</span></div>*/}
                                <div>{el.followed ? <button onClick={() => this.props.unfollow(el.id)}>Follow</button> :
                                    <button onClick={() => this.props.follow(el.id)}>Unfollow</button>}</div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    }
}
