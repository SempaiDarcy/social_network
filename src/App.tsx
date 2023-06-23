import {Header} from "./components/Header/Header";
import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import {ActionsType,RootStateType} from "./redux/store";

type AppPropsType = {
    state: RootStateType;
    dispatch: (action:ActionsType) => void
};

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/* <MyPosts /> */}
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
                        render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default App;
