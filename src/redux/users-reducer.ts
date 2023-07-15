import {ActionDispatchType, UsersPageType, UsersType} from "./store";

let initialState= {
    users: [],
    pageSize: 5,
    totalUsersCount:20,
    currentPage:1,
    isFetching:false
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
        case "TOOGLE-IS-FETCHING":{
            let newState = {
                ...state,isFetching: action.isFetching
            }
            return newState
        }
    }
    return state
}
export const setUsers = (users:UsersType[]) => {
    return {
        type:"SET-USER",
        users:users
    } as const
}
export const follow = (userID:number) => {
    return {
        type:"FOLLOW",
        userId:userID
    }as const
}
export const unfollow = (userId:number) => {
    return {
        type:"UNFOLLOW",
        userId:userId
    } as const
}
export const setCurrentPage = (currentPage:number) => {
    return {
        type:"SET-USERS-PAGE",
        currentPage:currentPage
    } as const
}
export const setUsersTotalCount = (totalCount:number) => {
    return {
        type:"SET-TOTAL-USERS-COUNT",
        count:totalCount
    } as const
}
export const toogleIsFetching = (isFetching:boolean) => {
    return {
        type:"TOOGLE-IS-FETCHING",
        isFetching:isFetching
    } as const
}
export type ToogleIsFetchingAT = ReturnType<typeof toogleIsFetching>
export type SetUsersTotalCountAT = ReturnType<typeof setUsersTotalCount>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetUserAT = ReturnType<typeof setUsers>
export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>

