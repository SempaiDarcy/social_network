import React from 'react';
import Loading from '../../../images/Loader.gif'
import s from './Preloader.module.css'
export const Preloader = () => {
    return (
        <div className={s.loader}><img src={Loading} alt=""/></div>
    );
};
