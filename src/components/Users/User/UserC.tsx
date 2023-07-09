import React, {Component} from 'react';
import s from "./User.module.css";
import {UsersType} from "../../../redux/store";
import axios from "axios";
type UserPropsType = {
    users:UsersType[],
    setUsers:(users:UsersType[])=>void,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
}
export class UserC extends Component<UserPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res)=>{
            this.props.setUsers(res.data.items)
        })
    }
    // в классовой компоненте обязателен метод render() который будет возвращать тот самый jsx
    render() {
        return <div>
            <div className={s.usersContainer}>
                <h1>Users</h1>
                <div className={s.users}>
                    {this.props.users.map(el=>{
                        return (
                            <div className={s.user} key={el.id}>
                                <div>Full name: <span>{el.name}</span></div>
                                <img className={s.avatar} src={el.photos.small !==null?el.photos.small:"https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"} alt=""/>
                                {/*<div>Status: <span>{el.status}</span></div>*/}
                                {/*<div>Country: <span>{el.location.country}</span></div>*/}
                                {/*<div>City: <span>{el.location.city}</span></div>*/}
                                <div>{el.followed?<button onClick={()=>this.props.unfollow(el.id)}>Follow</button>:<button onClick={()=>this.props.follow(el.id)}>Unfollow</button>}</div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    }
}
