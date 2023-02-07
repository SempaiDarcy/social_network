import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppType = {
    appState: StateType
}
const App = (props:AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={()=><Dialogs state={props.appState.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() =><Profile state={props.appState.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
