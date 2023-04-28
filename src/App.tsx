import React, {lazy} from "react";
import "./App.css";
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./bll/reducers/appReducer";
import {stateType, store} from "./bll/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ThemeProvider} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";
import {withSuspense} from "./hoc/withSuspense";
import {theme} from "./utils/constants/appTheme";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const FindUsersContainer = lazy(() => import('./components/Users/FindUsersContainer'));
const ContentContainer = lazy(() => import('./components/Content/ContentContainer'));
const Login = lazy(() => import('./components/Login/Login'));

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    catchAllErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert("Some error occurred")
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Switch>
                    <Route path="/profile/:userID?" render={withSuspense(ContentContainer)}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/users" render={withSuspense(FindUsersContainer)}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route exact path="/login" render={withSuspense(Login)}/>
                    <Route exact path="/" render={withSuspense(ContentContainer)}/>
                    <Route path='*' render={() => <div className="content" style={{
                        display: "flex",
                        alignItems: "flex-start",
                        width: "100%",
                        justifyContent: "center"
                    }}><h1>404: PAGE NOT FOUND</h1></div>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)



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


