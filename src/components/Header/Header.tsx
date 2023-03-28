import React from 'react';
import headerClasses from './Header.module.css'
import logo from '../assets/picture/Breaking-Bad-Logo-Transparent-PNG.png'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth:boolean,
    login:string|null
}
export const Header = (props:HeaderPropsType) => {
    return (
        <header className={headerClasses.header}>
            <img src={logo} alt={'just img'}/>

            <div className={headerClasses.loginBlock}>
                <NavLink to={'/login'}>{props.isAuth?props.login:'Login'}</NavLink>
            </div>
        </header>
    );
};

