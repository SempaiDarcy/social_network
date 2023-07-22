import {Navigation} from "./components/Navigation/Navigation";
import {Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Login from "./components/Login/Login";
import {Component, ComponentType} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitialTC} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import {Loader} from "./components/common/Loader/Loader";

type mapDispatchToPropsType = {
    setInitialTC:()=>void
}
type mapStateToPropsType = {
    isInitial:boolean
}
class App extends Component<mapDispatchToPropsType&mapStateToPropsType> {
    componentDidMount() {
        this.props.setInitialTC()
    }
    render() {
        if (!this.props.isInitial) {
            return <Loader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path={'/login'} render={() =>
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
                        <Route path={"/users"} render={() => (<UsersContainer/>)}/>
                        <Route path={'/news'} render={() => <div>news</div>}/>
                        <Route path={'/music'} render={() => <div>music</div>}/>
                        <Route path={'/settings'} render={() => <div>settings</div>}/>
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
export default compose <ComponentType>(
    connect(mapStateToProps, {setInitialTC}),withRouter)(App);
