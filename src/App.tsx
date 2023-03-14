import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {Route} from "react-router-dom";
import {path} from "./components/Constans/Constans";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";
import {logDOM} from "@testing-library/react";
import store from "./redux/redux-store";

const App = () => {
    console.log(store)
    return (
        <div className='app-wrapper'>
            <Header titleError={'Image is not found'}/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path={path.PROFILE} render={() => <Profile/>}/>
                <Route path={path.DIALOGS} render={()=><DialogsContainer/>}/>
            </div>
        </div>
    );
}

export default App;

