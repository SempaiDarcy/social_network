import React from "react";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {Post} from "./Posts/Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    posts:PostType[]
    addLike:(count:number,id:string)=>void
}
export const MyPosts = (props:MyPostsPropsType) => {

    return (
        <>
            <AddPostContainer/>
            {props.posts.map(elem => {
                return (
                    <Post key={elem.id} id={elem.id} message={elem.message} likes={elem.likes} addLike={props.addLike}/>
                )
            })}
        </>
    )
}