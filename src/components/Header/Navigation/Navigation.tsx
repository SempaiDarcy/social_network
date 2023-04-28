import React from "react";
import nav from "./Navigation.module.css"
import {NavLink} from "react-router-dom";
import {MailOutline, Person, Search} from "@material-ui/icons";



export function Navigation(){
    return (
        <nav className={nav.nav}>
            <div className={nav.item}>

                <NavLink className={(isActive) => isActive ? nav.active : nav.link} to={"/profile"}> <Person/> Profile</NavLink>
            </div>
            <div className={nav.item}>

                <NavLink className={(isActive) => isActive ? nav.active : nav.link} to={"/dialogs"}> <MailOutline/>Messages </NavLink>
            </div>
            <div className={nav.item}>
                <NavLink className={(isActive) => isActive ? nav.active : nav.link} to={"/users"}> <Search/> Find</NavLink>
            </div>
            {/*<div className={nav.item}>*/}
            {/*    <NavLink className={(isActive) => isActive ? nav.active : nav.link} to={"/news"}> <Announcement/> News</NavLink>*/}
            {/*</div>*/}
            {/*<div className={nav.item}>*/}

            {/*    <NavLink className={(isActive) => isActive ? nav.active : nav.link} to={"/music"}>  <PlayCircleOutline/> Music</NavLink>*/}
            {/*</div>*/}
            {/*<div className={nav.item}>*/}

            {/*    <NavLink className={(isActive) => isActive ? nav.active : nav.link} to={"/settings"}> <Settings/> Settings</NavLink>*/}
            {/*</div>*/}
        </nav>
    )
}
