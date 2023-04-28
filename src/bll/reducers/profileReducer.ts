import {ActionDispatchType, profilePageType, ProfileUserType} from "../types";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {PhotosType, profileAPI} from "../../api/api";
import {ProfileDataFormDataType} from "../../components/Content/Profile/ProfileDataForm/ProfileDataForm";
import {ThunkDispatch} from "redux-thunk";
import {stateType} from "../redux-store";
import {FormAction, stopSubmit} from "redux-form";


const ADD_POST = 'POSTS/ADD-POST'
const ADD_LIKE = 'POSTS/ADD-LIKE'
const SET_USER_PROFILE = 'POSTS/SET_USER_PROFILE'
const SET_STATUS = 'POSTS/SET_STATUS'

//action types
type SetStatusAT = ReturnType<typeof setStatusAC>
type SetUserProfileAT = ReturnType<typeof setUserProfile>
type AddPostAT = ReturnType<typeof addPostAC>
type AddLikeAT = ReturnType<typeof addLike>
type ChangePhotosAT = ReturnType<typeof changePhotosAC>
type DeletePostAT = ReturnType<typeof deletePostAC>

export type ProfileReducerAT = SetStatusAT | SetUserProfileAT | AddPostAT
    | AddLikeAT | ChangePhotosAT | DeletePostAT


const initialState: profilePageType = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likes: 3},
        {id: v1(), message: 'It\'s my first post', likes: 5},
        {id: v1(), message: 'Hi, how are you?', likes: 67},
        {id: v1(), message: 'Hi, how are you?', likes: 33},
        {id: v1(), message: 'Smile today', likes: 9},
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
    status: ""
}

export const profileReducer = (state: profilePageType = initialState, action: ProfileReducerAT): profilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: v1(),
                message: action.newPostText,
                likes: 0
            }
            return {...state, postData: [newPost, ...state.postData]}
        }
        case ADD_LIKE: {
            return {
                ...state,
                postData: state.postData.map(elem => elem.id === action.id ? {...elem, likes: action.count} : elem)
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case "POSTS/DELETE_POST":
            return {...state, postData: state.postData.filter(elem => elem.id !== action.id)}
        case "PROFILE/UPDATE_PHOTOS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...state.profile.photos,
                        ...action.photos
                    }
                }
            }
        default:
            return state
    }

}


//action creators
export const addPostAC = (newPostText: string) => {
    return {type: ADD_POST, newPostText} as const
}
export const addLike = (count: number, id: string) => {
    return {type: ADD_LIKE, count: count, id: id} as const
}
export const setUserProfile = (profile: ProfileUserType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status} as const
}
export const deletePostAC = (id: string) => {
    return {type: 'POSTS/DELETE_POST', id} as const
}
export const changePhotosAC = (photos: PhotosType) => {
    return {type: 'PROFILE/UPDATE_PHOTOS', photos} as const
}

//thunk creators

export const getUserProfileTC = (userID: string) => async (dispatch: Dispatch<ActionDispatchType>) => {
    const response = await profileAPI.getUserProfile(userID)
    dispatch(setUserProfile(response.data))
}
export const getUserStatusTC = (userID: string) => async (dispatch: Dispatch<ActionDispatchType>) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setStatusAC(response.data))
}
export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch<ActionDispatchType>) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatusAC(status))
}
export const savePhotoTC = (photo: File) => async (dispatch: Dispatch<ActionDispatchType>) => {
    const response = await profileAPI.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(changePhotosAC(response.data.data.photos))
    }
}
export const saveProfileTC = (profile: ProfileDataFormDataType) => async (dispatch: ThunkDispatch<stateType, any, ActionDispatchType | FormAction>, getState: () => stateType) => {
        const userId = getState().profilePage.profile.userId
        const response = await profileAPI.updateProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId.toString()))
        } else {
            dispatch(stopSubmit('profileInfoForm', {_error: response.data.messages[0]}))
        }
}

