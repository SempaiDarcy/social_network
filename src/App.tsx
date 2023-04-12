import React from 'react';
import './App.css';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {Route} from "react-router-dom";
import {path} from "./components/Constans/Constans";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import store from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import  {HeaderConnect} from "./components/Header/HeaderContainer";
import {UserContainerConnect} from "./components/Users/UsersContainer";



const App = () => {
    console.log(store)
    return (
        <div className='app-wrapper'>
            <HeaderConnect/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={path.DIALOGS} render={() => <DialogsContainer/>}/>
                <Route path={path.USERS} render={() => <UserContainerConnect/>}/>
            </div>
        </div>
    );
}
export default App;

