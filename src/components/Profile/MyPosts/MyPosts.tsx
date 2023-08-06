import React from "react";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {Post} from "./Posts/Post/Post";
import {PostType} from "../../../redux/store";
import s from './MyPosts.module.css'
type MyPostsPropsType = {
    posts:PostType[]
    addLike:(count:number,id:string)=>void
}

export const MyPosts = (props:MyPostsPropsType) => {

    return (
        <>
            <div className={s.addPost}><AddPostContainer/></div>
            <div className={s.posts}>
                {props.posts.map(elem => {
                    return (
                        <Post key={elem.id}
                              id={elem.id}
                              message={elem.message}
                              likes={elem.likes}
                              addLike={props.addLike}
                        />
                    )
                })}
            </div>

        </>
    )
}