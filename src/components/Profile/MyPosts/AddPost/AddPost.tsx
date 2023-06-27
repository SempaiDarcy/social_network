import React, {ChangeEvent, useState} from "react";
import s from "./AddPost.module.css";

type AddPostProps = {
    newPostText: string
    addPost: () => void
    changePostText: (text: string) => void

}

export const AddPost = (props: AddPostProps) => {

    const [message, setMessage] = useState<string>(props.newPostText)
    const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
        props.changePostText(event.currentTarget.value)
    }

    const addPostHandler = () => {
        if (message.trim() !== ""){
            props.addPost()
            setMessage('');
            props.changePostText("")
        } else {
            alert("Error! Add post text");
        }

    }
    return (

        <div className={s.postContainer}>
            <h3 className={s.myPosts}>My posts</h3>
            <div className={s.newPost}>New post</div>
            <div>
                <textarea value={message}
                          onChange={onChangeTextHandler}
                          className={s.inputTextArea}
                          rows={3}
                          placeholder={"Введите текст)"}
                />
            </div>
            <div>
                <button
                    className={s.button}
                    onClick={addPostHandler}>

                    Send
                </button>
            </div>
        </div>
    )
}