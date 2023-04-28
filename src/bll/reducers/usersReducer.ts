import {usersPageType, UsersType} from "../types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../api/api";


const SET_USERS = 'USERS/SET_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_PAGE_SIZE = 'USERS/SET_PAGE_SIZE'
const SET_TOTAL_USER_COUNT = 'USERS/SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'USERS/FOLLOWING_IN_PROGRESS'


export type SetUsersAT = {
    type: 'USERS/SET_USERS'
    users: UsersType[]
}
export type SetCurrentPageAT = {
    type: 'USERS/SET_CURRENT_PAGE'
    newCurrentPage: number
}
export type SetPageSizeAT = {
    type: 'USERS/SET_PAGE_SIZE'
    pageSize: number
}
export type SetTotalUserCountAT = {
    type: 'USERS/SET_TOTAL_USER_COUNT'
    count: number
}
export type ToggleIsFetchingAT = {
    type: 'USERS/TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type FollowingInProgressAT = {
    type: 'USERS/FOLLOWING_IN_PROGRESS'
    followingInProgress: boolean
    id: number
}
export type FollowUnfollowAT = ReturnType<typeof followUnfollowAC>

export type UserReducerAT = SetUsersAT
    | SetCurrentPageAT | SetPageSizeAT
    | SetTotalUserCountAT | ToggleIsFetchingAT
    | FollowingInProgressAT | FollowUnfollowAT


let initialState: usersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: usersPageType = initialState, action: UserReducerAT): usersPageType => {
    switch (action.type) {
        case "USERS/FOLLOW_UNFOLLOW_USER":
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: action.status} : elem)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrentPage}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(elem => elem !== action.id)
            }
        default:
            return state
    }
}

export const SetUsersAC = (users: UsersType[]): SetUsersAT => {
    return {type: SET_USERS, users}
}
export const SetCurrentPageAC = (newCurrentPage: number): SetCurrentPageAT => {
    return {type: SET_CURRENT_PAGE, newCurrentPage}
}
export const SetTotalUserCountAC = (count: number): SetTotalUserCountAT => {
    return {type: SET_TOTAL_USER_COUNT, count}
}
export const ToggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingAT => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const SetPageSizeAC = (pageSize: number): SetPageSizeAT => {
    return {type: SET_PAGE_SIZE, pageSize}
}
export const followingInProgressAC = (followingInProgress: boolean, id: number): FollowingInProgressAT => {
    return {type: FOLLOWING_IN_PROGRESS, followingInProgress, id}
}
export const followUnfollowAC = (userID: number, status: boolean) => {
    return {type: 'USERS/FOLLOW_UNFOLLOW_USER', userID, status} as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UserReducerAT>) => {
    dispatch(ToggleIsFetchingAC(true))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(ToggleIsFetchingAC(false))
    dispatch(SetUsersAC(response.items))
    dispatch(SetCurrentPageAC(currentPage))
    dispatch(SetPageSizeAC(pageSize))
    dispatch(SetTotalUserCountAC(response.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch<UserReducerAT>,
                                  userID: number,
                                  status: boolean,
                                  apiMethod: (userID: number) => any) => {
    dispatch(followingInProgressAC(true, userID))
    const response = await apiMethod(userID)
    if (response === 0) {
        dispatch(followUnfollowAC(userID, status))
    }
    dispatch(followingInProgressAC(false, userID))
}

export const setFollowTC = (userID: number) => async (dispatch: Dispatch<UserReducerAT>) => {
    await followUnfollowFlow(dispatch, userID, true, profileAPI.setFollow)
}

export const setUnFollowTC = (userID: number) => async (dispatch: Dispatch<UserReducerAT>) => {
    await followUnfollowFlow(dispatch, userID, false, profileAPI.setUnfollow)
}