import {PostType, ProfilePageType, ProfileType} from "./store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {PhotosType, profileAPI, ProfileDataFormDataType} from "../api/api";
import {ActionDispatchType} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

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
export const changePhotosAC = (photos: PhotosType) => {
    return {type: 'PROFILE/UPDATE_PHOTOS', photos} as const
}
export type ChangePostTextAT = {
    type: "CHANGE-NEW-TEXT",
    newText: string
}
export type SetUserStatusProfileAT = ReturnType<typeof setStatusProfile>
export type SetUserProfileAT = ReturnType<typeof setUserProfile>
export type AddPostAT = ReturnType<typeof addPostAC>
export type AddLikeAT = ReturnType<typeof addLikeAC>
type ChangePhotosAT = ReturnType<typeof changePhotosAC>
export type ProfileReducerAT = SetUserStatusProfileAT | SetUserProfileAT | AddPostAT
    | AddLikeAT | ChangePhotosAT | ChangePostTextAT
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
export const savePhotoTC = (photo: File) => async (dispatch: Dispatch<ActionDispatchType>) => {
    const response = await profileAPI.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(changePhotosAC(response.data.data.photos))
    }
}
export const saveProfileTC = (profile: ProfileDataFormDataType) => async (dispatch: ThunkDispatch<StateType, any, ActionDispatchType | FormAction>, getState: () => StateType) => {
    const userId = getState().profilePage.profile.userId
    const response = await profileAPI.updateProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileTC(userId.toString()))
    } else {
        dispatch(stopSubmit('profileInfoForm', {_error: response.data.messages[0]}))
    }
}