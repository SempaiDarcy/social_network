import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import navbarReducer from "./navbar-reducer";


let reducers = combineReducers({
    navbar: navbarReducer,
    profilePage:profilePageReducer,
    messagesPage:messagesPageReducer,
})

let store = createStore(reducers);
export type AppRootStateType = ReturnType<typeof reducers>
export default store