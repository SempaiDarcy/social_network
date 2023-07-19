import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./AddPost.module.css";
import {AddPostFormDataType} from "./AddPost";
import {maxLengthCreator, requiredField} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const PostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
            <form onSubmit={handleSubmit}>
                <Field type={'text'}
                       placeholder={'Add your post'}
                       name={'post'}
                       component={Textarea}
                       validate={[requiredField,maxLength10]}
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