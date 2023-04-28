import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../../../Dialogs/Dialogs.module.css";
import {maxLengthCreator} from "../../../../utils/validators/validators";
import {TextareaFC} from "../../../common/FormsControls/TextareaTC/TextareaFC";
import {ButtonSubmit} from "../../../common/FormsControls/ButtonSubmit/ButtonSubmit";

export type AddPostFormDataType = {
    post: string
}
const maxLength = maxLengthCreator(100)
const AddPostForm: FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Enter you post'
                       type='text'
                       name='post'
                       component={TextareaFC}
                       validate={[maxLength]}
                />
            </div>
                <ButtonSubmit form={AddPostForm}/>
        </form>
    )
}
export const AddPostReduxForm = reduxForm<AddPostFormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)