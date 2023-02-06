import React from 'react';
import s from './Header.module.css'
import logo from './../picture/Breaking-Bad-Logo-Transparent-PNG.png'
 const Header = () => {
    return <header className={s.header}>
                <img src={logo} alt={''}/>
            </header>

};

export default Header;