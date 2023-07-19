import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./AddPost.module.css";
import {AddPostFormDataType} from "./AddPost";

const PostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
            <form onSubmit={handleSubmit}>
                <Field type={'text'} placeholder={'Add your post'} name={'post'} component={'textarea'}
                />
                <button
                    className={s.button}
                >
                    Send
                </button>
            </form>
    )
}

export const PostReduxForm = reduxForm<AddPostFormDataType>({
    form:'addPostMessageForm'
})(PostForm)