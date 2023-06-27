import {Header} from "./components/Header/Header";
import "./App.css";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Route, Switch} from "react-router-dom";
import {ActionDispatchType, RootStateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: RootStateType;
    dispatch: (action: ActionDispatchType) => void
};

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile
                                postData = {props.state.profilePage.posts}
                                user = {props.state.user}
                                dispatch={props.dispatch}
                                newPostText={props.state.profilePage.newPostText}
                            />
                        )}
                    />
                    <Route
                        path={"/dialogs"}
                        render={() =>
                            <DialogsContainer dialogs={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path={'/news'} render={()=><div>news</div>}/>
                    <Route path={'/music'} render={()=><div>music</div>}/>
                    <Route path={'/settings'} render={()=><div>settings</div>}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
