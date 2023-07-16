import {Navigation} from "./components/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import {Login} from "./components/Login/Login";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path={'/login'} render={()=>
                        <Login/>
                    }/>
                    <Route
                        path={"/profile/:userID?"}
                        render={() => (
                            <ProfileContainer/>
                        )}
                    />
                    <Route
                        path={"/dialogs"}
                        render={() =>
                            <DialogsContainer/>}/>
                    <Route path={"/users"} render={()=>(<UsersContainer/>)}/>
                    <Route path={'/news'} render={() => <div>news</div>}/>
                    <Route path={'/music'} render={() => <div>music</div>}/>
                    <Route path={'/settings'} render={() => <div>settings</div>}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
