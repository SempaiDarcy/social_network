import {UserType} from "../components/Users/Users";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

type UsersStateType = {
    users: UserType[]
    pageSize:number,
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}


let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching:action.isFetching
            }
        default:
            return state
    }
}

export const follow= (userId:number) => ({type: FOLLOW, userId})
export const unfollow = (userId:number) => ({type: UNFOLLOW, userId})
export const setUsers = (users:UserType[]) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer