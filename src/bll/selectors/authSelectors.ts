import {stateType} from "../redux-store";

export const getIsAuth = (state: stateType) => {
    return state.auth.isAuth
}
export const getUserLogin = (state: stateType) => {
    return state.auth.login
}
export const getUserEmail = (state: stateType) => {
    return state.auth.email
}
export const getUserID = (state: stateType) => {
    return state.auth.id
}