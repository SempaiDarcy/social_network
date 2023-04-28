import {CircularProgress} from "@material-ui/core";
import React from "react";
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        // <div className={'content'}>
            <div className={s.preloader}>
                <CircularProgress color='primary'
                                  size='56px'/>
            </div>
        // </div>
    )
}