import React from "react";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {Post} from "./Posts/Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    postData:PostType[]
}
export const MyPosts = (props:MyPostsPropsType) => {

    return (
        <>
            <AddPostContainer/>
            {props.postData.map(elem => {
                return (
                    <Post key={elem.id} message={elem.message} likes={elem.likes}/>
                )
            })}
        </>
    )
}