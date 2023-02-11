import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {path} from "./components/Constans/Constans";
import {AppRootStateType} from "./redux/redux-store";

export type AppStateType = {
    dispatch: (action: any) => void
    state: AppRootStateType
}

const App = (props: AppStateType) => {
    const {profilePage, navbar, messagesPage} = props.state



    return (
        <div className='app-wrapper'>
            <Header titleError={'Image is not found'}/>
            <Navbar navbar={navbar}/>
            <div className='app-wrapper-content'>
                <Route path={path.DIALOGS} render={() =>
                    <Dialogs
                        data={messagesPage}
                        dispatch={props.dispatch}
                    />
                }/>

                <Route path={path.PROFILE} render={() =>
                    <Profile
                        posts={profilePage}
                        dispatch={props.dispatch}
                    />}
                />

                <Route path={path.NEWS} render={() => <News/>}/>
                <Route path={path.MUSIC} render={() => <Music/>}/>
                <Route path={path.SETTINGS} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;

