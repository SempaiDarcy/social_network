import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}
type LoginType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isAuth: boolean
}
const Login = (props: LoginType & mapStateToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }else return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}
const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {loginTC})(Login)

