import {StateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: StateType) => {
    return state.usersPage.users
}
export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}
export const getUsers = createSelector(getUsersSelector, (users) => {// не является сама по себе селектором. это логика селектора
    return users.filter(el => true)
})
export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}
export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}