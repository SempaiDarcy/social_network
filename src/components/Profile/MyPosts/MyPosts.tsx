import React from "react";
import {ActionDispatchType} from "../../../redux/store";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {PostComponentContainer} from "./Posts/PostComponentContainer";

export type MyPostsProps = {
    postData: Array<PostDataType>
    dispatch: (action: ActionDispatchType) => void
    newPostText: string
}

export type PostDataType = {
    id: string
    message: string
    likes: number
}


export const MyPosts = (props: MyPostsProps) => {

    return (
        <>
            <AddPostContainer dispatch={props.dispatch}
                              newPostText={props.newPostText}/>
            {props.postData.map(elem => {
                return (
                    <PostComponentContainer postData={elem}
                                            dispatch={props.dispatch}/>

                )
            })}

        </>
    )
}