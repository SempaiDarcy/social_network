import React, {FC} from "react";
import s from "./AddPost.module.css";
import {PostReduxForm} from "./PostReduxForm";

type AddPostProps = {
    addPost: (newPostText:string) => void
}
 export type AddPostFormDataType = {
    post:string
}
export const AddPost : FC<AddPostProps> = ({addPost}) =>  {
    const addPostHandler = (values:AddPostFormDataType) => {
        console.log(values)
        // debugger
        addPost(values.post)
    }
    return (
        <div className={s.postContainer}>
            <h3 className={s.myPosts}>My posts</h3>
            <div className={s.newPost}>New post</div>
            <PostReduxForm onSubmit={addPostHandler}/>
            {/*<form>*/}
            {/*    <textarea value={message}*/}
            {/*             onChange={onChangeTextHandler}*/}
            {/*             className={s.inputTextArea}*/}
            {/*             rows={3}*/}
            {/*             placeholder={"Введите текст)"}*/}
            {/*/>*/}

            {/*    <button*/}
            {/*        className={s.button}*/}
            {/*        onClick={addPostHandler}>*/}
            {/*        Send*/}
            {/*    </button>*/}
            {/*</form>*/}
        </div>
    )
}