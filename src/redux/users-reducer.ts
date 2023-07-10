import {ActionDispatchType, UsersPageType, UsersType} from "./store";

let initialState= {
    users: [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage:1
}
export const usersReducer = (state:UsersPageType= initialState,action:ActionDispatchType) => {
    switch (action.type) {
        case "SET-USER": {
            let newState = {...state,users:action.users}
            return newState;
        }
        case "FOLLOW": {
            let newState = {
                ...state,
                users: [...state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)]
            }
            return newState;
        }
        case "UNFOLLOW": {
            let newState = {
                ...state,
                users: [...state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)]
            }
            return newState
        }
        case "SET-USERS-PAGE": {
            let newState = {
                ...state,
                currentPage: action.currentPage
            }
            return newState
        }
        case "SET-TOTAL-USERS-COUNT":
            let newState = {
                ...state,totalUsersCount: action.count
            }
            return  newState
    }
    return state
}
export const setUsersAC = (users:UsersType[]) => {
    return {
        type:"SET-USER",
        users:users
    } as const
}
export const followAC = (userID:number) => {
    return {
        type:"FOLLOW",
        userId:userID
    }as const
}
export const unfollowAC = (userId:number) => {
    return {
        type:"UNFOLLOW",
        userId:userId
    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type:"SET-USERS-PAGE",
        currentPage:currentPage
    } as const
}
export const setUsersTotalCountAC = (totalCount:number) => {
    return {
        type:"SET-TOTAL-USERS-COUNT",
        count:totalCount
    } as const
}
export type SetUsersTotalCountAT = ReturnType<typeof setUsersTotalCountAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type SetUserAT = ReturnType<typeof setUsersAC>
export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>

