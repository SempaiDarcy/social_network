import {ActionDispatchType, UsersPageType, UsersType} from "./store";

let initialState= {
    users: []
}
export const usersReducer = (state:UsersPageType= initialState,action:ActionDispatchType) => {
    switch (action.type) {
        case "SET-USER": {
            let newState = {...state,users:[...state.users,...action.users]}
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
    }
    return state
}
export const setUsersAC = (users:UsersType[]) => {
    return {
        type:"SET-USER",
        users:users
    } as const
}
export const followAC = (userID:string) => {
    return {
        type:"FOLLOW",
        userId:userID
    }as const
}
export const unfollowAC = (userId:string):UnfollowAT => {
    return {
        type:"UNFOLLOW",
        userId:userId
    }
}
export type SetUserAT = ReturnType<typeof setUsersAC>
export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT ={
    type:"UNFOLLOW",
    userId:string
}

