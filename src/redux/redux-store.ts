import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
})
export const store = legacy_createStore(reducers,applyMiddleware(thunk))
export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>
export type DispatchType = typeof store.dispatch

// @ts-ignore
window.store = store;
