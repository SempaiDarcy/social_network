import {Header} from "./components/Header/Header";
import "./App.css";
import {Navigation} from "./components/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        path={"/profile"}
                        render={() => (
                            <ProfileContainer/>
                        )}
                    />
                    <Route
                        path={"/dialogs"}
                        render={() =>
                            <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <div>news</div>}/>
                    <Route path={'/music'} render={() => <div>music</div>}/>
                    <Route path={'/settings'} render={() => <div>settings</div>}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
