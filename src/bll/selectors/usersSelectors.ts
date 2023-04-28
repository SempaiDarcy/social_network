import {stateType} from "../redux-store";
import {UsersType} from "../types";
// import {createSelector, Selector} from "reselect";


export const getUsers = (state: stateType): UsersType[] => {
    return state.usersPage.users
}

//пример использования и типизации мемоизированного селектора (для сложных вычисляемых селекторов)
// export const getUsersFilter  = createSelector<[Selector<stateType, UsersType[]>], UsersType[]>(getUsers, (users) => {
//    return users.filter(elem => true)
// });


export const getPageSize = (state: stateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: stateType) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: stateType) => {
    return state.usersPage.totalUsersCount
}
export const getUsersIsFetching = (state: stateType) => {
    return state.usersPage.isFetching
}
export const getUserFollowingInProgress = (state: stateType) => {
    return state.usersPage.followingInProgress
}