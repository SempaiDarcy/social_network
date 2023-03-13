import React from 'react';
import navClasses from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export type SidebarType = {
    title: string
    id: string
    path: string
}
type SidebarPropsType = {
    sidebar: SidebarType[]
}
const Sidebar = (props:SidebarPropsType) => {
    return (
        <div>
            {props.sidebar.map(s => {
                return (
                    <div className={navClasses.item} key={s.id}>
                        <NavLink to={s.path}>
                            {s.title}
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;