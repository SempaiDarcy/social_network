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