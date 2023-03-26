import {v1} from "uuid";
import {ProfilePageType} from "../components/Profile/MyPosts/MyPosts";
type addPostAT = ReturnType<typeof addPostActionCreator>
type updateNewPostTextAT = ReturnType<typeof updateNewPostTextActionCreator>
type setUserProfileAT = ReturnType<typeof setUserProfileAC>

type ActionType = addPostAT|updateNewPostTextAT|setUserProfileAT

// export const ADD_POST = 'ADD-POST'
// export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ProfileUsers = {
    "aboutMe": null | string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": null | string
    "userId": number
    "photos": {
        "small": string
        "large":  string
    }
}

let initialState = {
    posts: [
        {
            id: v1(),
            likeCounts: 10,
            mes: 'Hi',
            photo: "https://oir.mobi/uploads/posts/2022-07/1658215253_3-oir-mobi-p-vo-vse-tyazhkie-art-3.jpg",
            errorMes: 'Image not found'
        },
        {
            id: v1(),
            likeCounts: 15,
            mes: "It's my first post",
            photo: "https://phonoteka.org/uploads/posts/2021-07/1625748339_23-phonoteka-org-p-dzhessi-pinkman-art-krasivo-25.jpg",
            errorMes: 'Image not found'
        },
    ],
    newPostText: '',
    // profile: {} as ProfileUsers
    profile: {
        "aboutMe": 'Я супер бупер веб-разработчик',
        "contacts": {
            "facebook": 'asdasd',
            "website": 'asdsad',
            "vk": 'sadsdfasdf',
            "twitter": 'sadfasdf',
            "instagram": 'sdfasdf',
            "youtube": 'asdfsadfasdf',
            "github": 'asfdasdf',
            "mainLink": 'asdfasdf',
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": 'asdfasdf',
        "fullName": 'fsadfasdf',
        "userId":3,
        "photos": {
            "small": 'asdfasdfasdf',
            "large": 'sadfsadf',
        }
    }
}

const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: v1(),
                likeCounts: 0,
                mes: state.newPostText,
                photo: "https://citaty.info/files/characters/82733_0.jpg",
                errorMes: 'Image not found'
            }
            return  {
                ...state,posts: [...state.posts, newPost],newPostText:''
            }
        case 'UPDATE_NEW_POST_TEXT':
            // state.newPostText = action.newText
            return {
                ...state,newPostText:action.newText
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,profile:action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type:'ADD_POST'} as const)
export const updateNewPostTextActionCreator = (newText: string) => ({type: 'UPDATE_NEW_POST_TEXT', newText} as const)
export const setUserProfileAC = (profile:ProfileUsers) => ({type: 'SET_USER_PROFILE', profile}  as const)

export default profilePageReducer

