import {PostDataType} from "../components/Content/MyPosts/MyPosts";
import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {UserReducerAT} from "./reducers/usersReducer";
import {DialogsReducerAT} from "./reducers/dialogsReducer";
import {AuthReducerAT} from "./reducers/authReducer";
import {AppReducerAT} from "./reducers/appReducer";
import {ProfileReducerAT} from "./reducers/profileReducer";


//types
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
}
export type AuthDataType = {
    id: number | null
    login: string
    email: string
    isAuth: boolean
    captchaURL: null | string
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean
}
export type profilePageType = {
    postData: PostDataType[]
    profile: ProfileUserType
    status: string
}
export type dialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type usersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}


//dispatch action full type
export type ActionDispatchType = DialogsReducerAT
    |  AuthReducerAT | UserReducerAT
    | AppReducerAT | ProfileReducerAT


