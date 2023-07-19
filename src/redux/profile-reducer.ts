import {ActionDispatchType, PostType, ProfilePageType, ProfileType} from "./store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

let initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), message: "Hi, how are you?", likes: 12},
        {id: v1(), message: "Hello, I am fine", likes: 11},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionDispatchType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            debugger
            const newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likes: 0
            }
            let newState = {...state, posts: [newPost, ...state.posts]}
            return newState
        }
        case "CHANGE-NEW-TEXT": {
            let newState = {...state}
            newState.newPostText = action.newText
            return newState
        }
        case "ADD-LIKE": {
            let newState = {
                ...state,
                posts: state.posts.map((el) => el.id === action.id ? {...el, likes: action.count} : el)
            }
            return newState
        }
        case "SET-USER-PROFILE": {
            let newState = {
                ...state, profile: action.profile
            }
            return newState
        }
        case "SET-USER-STATUS": {
            // let newState = {
            //     ...state,status:action.status
            // }
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
export const addPostAC = (newPostText:string) => {
    // debugger
    return {
        type: "ADD-POST",
        newPostText:newPostText
    } as const
}
export const changeNewTextAC = (newText: string): ChangePostTextAT => {
    return {type: "CHANGE-NEW-TEXT", newText: newText}
}
export const addLikeAC = (count: number, id: string) => {
    return {type: "ADD-LIKE", count: count, id: id} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export const setStatusProfile = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        status: status
    } as const
}
export type SetUserStatusProfileAT = ReturnType<typeof setStatusProfile>
export type SetUserProfileAT = ReturnType<typeof setUserProfile>
export type AddPostAT = ReturnType<typeof addPostAC>
export type ChangePostTextAT = {
    type: "CHANGE-NEW-TEXT",
    newText: string
}
export type AddLikeAT = ReturnType<typeof addLikeAC>
export const getUserProfileTC = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userID).then((data) => {
        dispatch(setUserProfile(data))
    })
}
export const getStatusProfileTC = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getStatusProfile(userID).then((res) => {
        // debugger
        dispatch(setStatusProfile(res.data))
    })
}
export const updateStatusProfileTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatusProfile(status).then((res) => {
        if (res.data.resultCode === 0)
            dispatch(setStatusProfile(status))
    })
}