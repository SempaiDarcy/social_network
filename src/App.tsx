import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {Route} from "react-router-dom";
import {path} from "./components/Constans/Constans";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header titleError={'Image is not found'}/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path={path.DIALOGS} render={()=><DialogsContainer/>}/>
            </div>
        </div>
    );
}

export default App;

