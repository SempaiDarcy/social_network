import {Header} from "./components/Header/Header";
import "./App.css";
import {Navigation} from "./components/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";
import {RootStateType} from "./redux/store";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {
    state:RootStateType
}
const App = (props:AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile user={props.state.user} postData={props.state.profilePage.posts}/>
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
