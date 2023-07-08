import React from 'react';
import {UsersType} from "../../../redux/store";
import s from "./User.module.css"
import {v1} from "uuid";
type UserPropsType = {
    users:UsersType[],
    setUsers:(users:UsersType[])=>void,
    follow:(userId:string)=>void,
    unfollow:(userId:string)=>void
}
export const User = (props:UserPropsType) => {
    if(props.users.length===0) {
        props.setUsers([
            {id:v1(),photoUrl:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed:true,fullName:"Akbar",status:'I am looking for a work',location: {country: 'Kazakhstan', city: 'Oral'}},
            {id:v1(),photoUrl:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed:true,fullName:"Yuriy",status:'I am study', location: {country: 'Belarus', city: 'Minsk'}},
            {id:v1(),photoUrl:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed:false,fullName:"Olga",status:'I am a work', location: {country: 'Belarus', city: 'Minsk'}},
        ])
    }
    return (
        <div className={s.usersContainer}>
            <h1>Users</h1>
            <div className={s.users}>
                {props.users.map(el=>{
                    return (
                        <div className={s.user} key={el.id}>
                            <div>Full name: <span>{el.fullName}</span></div>
                            <img className={s.avatar} src={el.photoUrl} alt=""/>
                            <div>Status: <span>{el.status}</span></div>
                            <div>Country: <span>{el.location.country}</span></div>
                            <div>City: <span>{el.location.city}</span></div>
                            <div>{el.followed?<button onClick={()=>props.unfollow(el.id)}>Follow</button>:<button onClick={()=>props.follow(el.id)}>Unfollow</button>}</div>
                        </div>)
                })}
            </div>
            <button>Set Users</button>
        </div>
    );
};
