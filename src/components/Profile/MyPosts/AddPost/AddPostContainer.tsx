import React from "react";
import {ActionDispatchType, addPostAC, changeNewTextAC} from "../../../../redux/store";
import {AddPost} from "./AddPost";

type AddPostProps = {
    dispatch: (action: ActionDispatchType) => void
    newPostText: string
}


export const AddPostContainer = (props: AddPostProps) => {
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const changePostText = (text: string) => {
        props.dispatch(changeNewTextAC(text))
    }
    return (
        <AddPost addPost={ addPost }
                 changePostText={ changePostText }
                 newPostText={ props.newPostText }/>
    )
}
