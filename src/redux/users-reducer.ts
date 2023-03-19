import {UserType} from "../components/Users/Users";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

type UsersStateType = {
    users: UserType[]
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
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
                ...state,users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,totalUsersCount: action.totalUsersCount
            }
        default:
            return state
    }
}

export const followAC = (userId:number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users:UserType[]) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export default usersReducer