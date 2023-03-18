import {v1} from "uuid";
import users, {UsersStateType, UserType} from "../components/Users/Users";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const usersReducer = (state:UsersStateType = initialState, action: any) => {
    console.log(state)
    switch (action.type) {
        case FOLLOW:
        return {
            ...state,users: state.users.map(el=>el.id===action.userId?{...el, followed: true}:el)
        }
        case UNFOLLOW:
            return {
                ...state,users: state.users.map(el=>el.id===action.userId?{...el, followed: false}:el)
            }
        case SET_USERS:
            return {
                ...state,users: [...state.users,...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId:number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users:UserType[]) => ({type: SET_USERS, users})

export default usersReducer