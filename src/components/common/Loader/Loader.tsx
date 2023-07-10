import React from 'react';
import Loading from '../../../images/Loader.gif'
import s from './Loader.module.css'
export const Loader = () => {
    return (
        <div className={s.loader}><img src={Loading} alt=""/></div>
    );
};
