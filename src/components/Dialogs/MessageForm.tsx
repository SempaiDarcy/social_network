import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import {TextareaFC} from "../common/FormsControls/TextareaTC/TextareaFC";
import {ButtonSubmit} from "../common/FormsControls/ButtonSubmit/ButtonSubmit";
import {maxLengthCreator, required} from "../../utils/validators/validator";

export type MessageFormDataType = {
    message: string
}
const maxLength = maxLengthCreator(250)
const MessageForm: FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    const {handleSubmit,reset} = props
    const handleFormSubmit = (values:any) => {
        handleSubmit(values)
        reset()
    }
    return (
        <form onSubmit={handleFormSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Enter you message'
                       type='text'
                       name='message'
                       validate={[required, maxLength]}
                       component={TextareaFC}
                />
            </div>
            <ButtonSubmit form={MessageForm}/>
        </form>
    )
}
export const MessageReduxForm = reduxForm<MessageFormDataType>({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(MessageForm)