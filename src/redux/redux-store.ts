import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {userReducer} from "./userReducer";

const reducers = combineReducers({
    user:userReducer,
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
})
export const store = legacy_createStore(reducers)
export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>
export type DispatchType = typeof store.dispatch

// @ts-ignore
window.store = store;
