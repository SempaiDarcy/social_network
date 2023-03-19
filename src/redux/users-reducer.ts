import {v1} from "uuid";
import users, {UserType} from "../components/Users/UsersС";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

type UsersStateType = {
    users: UserType[]
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage:1
}

const usersReducer = (state:UsersStateType = initialState, action: any):UsersStateType => {
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
        case SET_CURRENT_PAGE:
            return {
                ...state,currentPage: action.currentPage
            }
        default:
            return state
    }
}

export const followAC = (userId:number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users:UserType[]) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage})
export default usersReducer