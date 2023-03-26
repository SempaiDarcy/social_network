import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {Route} from "react-router-dom";
import {path} from "./components/Constans/Constans";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import store from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    console.log(store)
    return (
        <div className='app-wrapper'>
            <Header titleError={'Image is not found'}/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path={path.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={path.DIALOGS} render={()=><DialogsContainer/>}/>
                <Route path={path.USERS} render={()=><UsersContainer/>}/>
            </div>
        </div>
    );
}
export default App;

