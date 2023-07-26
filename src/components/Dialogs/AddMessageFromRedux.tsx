import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "./Dialogs";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";

const maxLength10 = maxLengthCreator(100)
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field type={'text'}
                   component={Textarea}
                   name={'message'}
                   placeholder={'Enter your message'}
                   validate={[requiredField,maxLength10]}/>
            <button>Send</button>
        </form>)
}

export const AddMessageFromRedux = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)