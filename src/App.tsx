import {Header} from "./components/Header/Header";
import "./App.css";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import {ActionDispatchType, RootStateType} from "./redux/store";

type AppPropsType = {
    state: RootStateType;
    dispatch: (action: ActionDispatchType) => void
};

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
             {/*<MyPosts />*/}
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile
                                posts={props.state.profilePage.posts}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route
                        path={"/dialogs"}
                        render={() =>
                            <Dialogs
                                dialogsPage={props.state.dialogsPage}
                                dispatch={props.dispatch}/>}
                    />
                    <Route path={'/news'} render={()=><div>news</div>}/>
                    <Route path={'/music'} render={()=><div>music</div>}/>
                    <Route path={'/settings'} render={()=><div>settings</div>}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
