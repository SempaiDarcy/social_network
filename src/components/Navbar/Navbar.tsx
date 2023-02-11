import React from 'react';
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends, FriendsType} from "./Friends/Friends";

export type SidebarType = {
    title: string
    id: string
    path: string
}

export type NavbarType = {
    sidebar: SidebarType[]
    friends: FriendsType
}
type NavbarArray = {
    navbar: NavbarType
}
export const Navbar = (props:NavbarArray) => {
    return (
        <nav className={navClasses.nav}>
            {props.navbar.sidebar.map(el => {
                return (
                    <div className={navClasses.item}  key={el.id}>
                        <NavLink  to={el.path}>{el.title}</NavLink>
                    </div>
                );
            })}
            <Friends title={props.navbar.friends.title}
                     imgFriends={props.navbar.friends.imgFriends}/>
        </nav>
    );
};
