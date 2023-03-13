import React from "react";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Navbar} from "./Navbar";


const mapToStateProps = (state:AppRootStateType ) => {
    return {
        sidebar: state.navbar.sidebar,
        friends: state.navbar.friends,
    }
}
const mapDispatchToStateProps = () => ({})


export const NavbarContainer = connect(mapToStateProps,mapDispatchToStateProps)(Navbar)