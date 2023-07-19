import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}
const maxLength15 = maxLengthCreator(15)
const maxLength10 = maxLengthCreator(10)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field validate={[requiredField,maxLength10]} placeholder={'Login'} name={'login'} component={Input}/></div>
                <div><Field validate={[requiredField,maxLength15]} placeholder={'Password'} name={'password'} component={Input}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={Input}/>Remember me</div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}

