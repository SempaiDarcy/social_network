import React from "react";
import header from "./Header.module.css"
import {Navigation} from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import {ExitToApp} from "@material-ui/icons";
import {UserAvatar} from "../Content/Profile/Avatar/UserAvatar";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    avatar: string
    logoutTC: () => void
}

function Header(props: HeaderPropsType) {
    const onClickHandler = () => {
        props.logoutTC()
    }
    return (
        <header className={header.headerContainer}>
            <div className={header.header}>
                <div className={header.logoAndTitle}>
                    <span className={header.name}>SOCIAL NETWORK</span>
                </div>

                <Navigation/>

                <div >
                    {props.isAuth
                        ? <div className={header.loginBlock}>
                            <span>{props.login}</span>
                            <UserAvatar img={props.avatar} size={36}/>
                            <IconButton onClick={onClickHandler} style={{color: 'white'}}>
                                <ExitToApp/>
                            </IconButton>
                        </div>
                        : <NavLink to={'/login'}
                                   className={(isActive) => isActive ? header.active : header.link}>
                            Login
                        </NavLink>}

                </div>
            </div>
        </header>
    )
}

export default Header;