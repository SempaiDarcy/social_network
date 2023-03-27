import React from 'react';
import headerClasses from './Header.module.css'
import logo from '../assets/picture/Breaking-Bad-Logo-Transparent-PNG.png'

type HeaderType = {
    titleError: string
}

export const Header = (props: HeaderType) => {
    return (
        <header className={headerClasses.header}>
            <img src={logo} alt={props.titleError}/>
        </header>
    );
};

