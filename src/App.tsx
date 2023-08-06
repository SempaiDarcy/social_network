import {Navigation} from "./components/Navigation/Navigation";
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import {Component, ComponentType, lazy} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {setInitialTC} from "./redux/app-reducer";
import {StateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {ThemeProvider} from "@material-ui/core";
import {theme} from "./utils/constants/appTheme";
import Login from "./components/Login/Login";

const DialogsContainer = lazy(()=>import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(()=>import('./components/Profile/ProfileContainer'))
const UsersContainer = lazy(()=>import('./components/Users/UsersContainer'))

type mapDispatchToPropsType = {
    setInitialTC:()=>void
}
type mapStateToPropsType = {
    isInitial:boolean
}
class App extends Component<mapDispatchToPropsType & mapStateToPropsType> {
    catchAllErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert("Some error occurred")
    }
    componentDidMount() {
        this.props.setInitialTC()
        window.addEventListener("unhandledrejection", this.catchAllErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllErrors)
    }

    render() {
        if (!this.props.isInitial) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route
                            path={"/profile/:userID?"}
                            render={withSuspense(ProfileContainer)}
                        />
                        <Route
                            path={"/dialogs"}
                            render={withSuspense(DialogsContainer)}
                        />
                        <Route path={"/users"}
                               render={withSuspense(UsersContainer)}
                        />
                        <Route path={'/news'} render={() => <div>news</div>}/>
                        <Route path={'/music'} render={() => <div>music</div>}/>
                        <Route path={'/settings'} render={() => <div>settings</div>}/>
                        <Route exact path="/login" render={withSuspense(Login)}/>
                        <Route exact path={'/'} render={withSuspense(ProfileContainer)}
                        />
                        <Route path='*' render={() => <div className="content" style={{
                            display: "flex",
                            alignItems: "flex-start",
                            width: "100%",
                            justifyContent: "center"
                        }}><h1>404: PAGE NOT FOUND</h1></div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state:StateType) => {
    return {
        isInitial:state.app.initialized
    }
}
const AppContainer = compose <ComponentType>(
    connect(mapStateToProps, {setInitialTC}),withRouter)(App);

const MainApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <AppContainer/>
                </HashRouter>
            </ThemeProvider>
        </Provider>
    )
}
export default MainApp
