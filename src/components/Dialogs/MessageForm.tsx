import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import {TextareaFC} from "../common/FormsControls/TextareaTC/TextareaFC";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {ButtonSubmit} from "../common/FormsControls/ButtonSubmit/ButtonSubmit";

export type MessageFormDataType = {
    message: string
}
const maxLength = maxLengthCreator(250)
const MessageForm: FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
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