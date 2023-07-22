import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";
import {ActionDispatchType} from "./store";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer,
    app:appReducer
})
export const store = legacy_createStore(reducers, applyMiddleware(thunk))
export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>
export type DispatchType = ThunkDispatch<StateType, any, ActionDispatchType>

// @ts-ignore
window.store = store;
