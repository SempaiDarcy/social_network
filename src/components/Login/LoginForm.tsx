import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {FormDataType} from "./Login";
import s from './../common/FormsControls/FormsControls.module.css'
const maxLength15 = maxLengthCreator(30)
const maxLength10 = maxLengthCreator(30)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit,error} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field validate={[requiredField,maxLength10]} placeholder={'Login'} name={'login'} component={Input}/></div>
                <div><Field validate={[requiredField,maxLength15]} placeholder={'Password'} name={'password'} component={Input} type={'password'}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={Input}/>Remember me</div>
                {error && <div className={s.form_summary_error}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)