import React from 'react';
import {UsersType} from "../../../redux/store";
type UserPropsType = {
    users:UsersType[],
    setUsers:(users:UsersType[])=>void,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
}
export const Users = (props:UserPropsType) => {
    // if(props.users.length===0) {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res)=>{
    //         props.setUsers(res.data.items)
    //     })
    // }
    return (<div></div>
        // <div className={s.usersContainer}>
        //     <h1>Users</h1>
        //     <div className={s.users}>
        //         {props.users.map(el=>{
        //             return (
        //                 <div className={s.user} key={el.id}>
        //                     <div>Full name: <span>{el.name}</span></div>
        //                     <img className={s.avatar} src={el.photos.small !==null?el.photos.small:"https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"} alt=""/>
        //                     {/*<div>Status: <span>{el.status}</span></div>*/}
        //                     {/*<div>Country: <span>{el.location.country}</span></div>*/}
        //                     {/*<div>City: <span>{el.location.city}</span></div>*/}
        //                     <div>{el.followed?<button onClick={()=>props.unfollow(el.id)}>Follow</button>:<button onClick={()=>props.follow(el.id)}>Unfollow</button>}</div>
        //                 </div>)
        //         })}
        //     </div>
        //     <button>Set Users</button>
        // </div>
    );
};
