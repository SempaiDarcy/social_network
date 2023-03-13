import React from 'react';
import navClasses from './Navbar.module.css'
import {Friends, FriendsType} from "./Friends/Friends";
import Sidebar, {SidebarType} from "./Sidebar";



export type NavbarType = {
    sidebar: SidebarType[]
    friends: FriendsType
}

export const Navbar = (props:NavbarType) => {
    return (
        <nav className={navClasses.nav}>
            <Sidebar sidebar={props.sidebar}/>
            <Friends title={props.friends.title}
                     imgFriends={props.friends.imgFriends}/>
        </nav>
    );
};
