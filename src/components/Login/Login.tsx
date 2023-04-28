import s from './Login.module.css'
import React, {FC} from "react";
import {connect} from "react-redux";
import {loginTC} from "../../bll/reducers/authReducer";
import {stateType} from "../../bll/redux-store";
import {Redirect} from "react-router-dom";
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";


type LoginType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    isAuth: boolean
    captchaURL: string | null
}
type mapStateToPropsType = {
    isAuth: boolean
    captchaURL: string | null
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}
const Login:FC<LoginType> = ({loginTC, isAuth, captchaURL}) => {
    const onSubmit = (data: FormDataType) => {
        loginTC(data.login, data.password, data.rememberMe, data.captcha)
    }
    if (isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className='content'>
            <div className={s.container}>
                <h2 className={s.title}> LOGIN </h2>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, {loginTC})(Login)


