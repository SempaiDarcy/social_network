import React from 'react';
import s from './Header.module.css'
import logo from '../assets/picture/Breaking-Bad-Logo-Transparent-PNG.png'
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    authUserData:AuthStateType
}
export const Header = (props:HeaderPropsType) => {
    console.log(props.authUserData.login)
    return (
        <header className={s.header}>
            <img src={logo} alt={'just img'}/>

            <div className={s.loginBlock}>
                {
                    props.authUserData.isAuth ?<div className={s.hello}>WELCOME,  {props.authUserData.login}</div>
                       : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

