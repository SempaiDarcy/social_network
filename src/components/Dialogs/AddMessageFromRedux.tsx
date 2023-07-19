import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "./Dialogs";

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <Field type={'text'}  component={'textarea'} name={'message'} placeholder={'Enter your message'}/>
        <button>Send</button>
    </form>
}

export const AddMessageFromRedux = reduxForm<FormDataType>({
    form:'dialogAddMessageForm'
})(AddMessageForm)