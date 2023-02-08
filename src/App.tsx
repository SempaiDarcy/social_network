import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppType = {
    appState: StateType
    addPost:(postMessage:string)=>void
}
const App = (props:AppType) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={()=><Dialogs state={props.appState.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() =><Profile state={props.appState.profilePage} addPost={props.addPost}/>}/>
                </div>
            </div>
    );
}


export default App;
