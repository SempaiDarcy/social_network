import React, {FC} from "react";
import c from "./AddPost.module.css";
import {AddPostFormDataType, AddPostReduxForm} from "./AddPostForm";

type AddPostProps = {
    addPost: (newPostText: string) => void
}

export const AddPost: FC<AddPostProps> = ({addPost}) => {
    const addPostHandler = (values: AddPostFormDataType):void => {
        addPost(values.post)
    }
    return (
        <div className={c.postContainer}>
            <h3 className={c.title}>My posts</h3>
            <AddPostReduxForm onSubmit={addPostHandler}/>
        </div>
    )
}
