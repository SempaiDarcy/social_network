import {
    AddLikeAT,
    AddPostAT,
    ChangePostTextAT,
    SetUserProfileAT,
    SetUserStatusProfileAT,
} from "./profile-reducer";
import {AddMessageAT} from "./dialogs-reducer";
import {
    FollowAT,
    SetUserAT,
    SetCurrentPageAT,
    UnfollowAT,
    SetUsersTotalCountAT,
    ToogleIsFetchingAT, ToogleIsFollowingAT
} from "./users-reducer";
import {SetUserDataAT} from "./auth-reducer";
import {SetInitializedAT} from "./app-reducer";

// export let store: StoreType = {
//     _state: {
//         user: {
//             id: v1(),
//             name: 'Akbar Gabdualiev',
//             city: 'Uralsk',
//             site: '-',
//             avatar: "https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"
//         },
//         profilePage: {
//             newPostText:'',
//             posts: [
//                 {id: v1(), message: "Hi, how are you?", likes: 12},
//                 {id: v1(), message: "Hi, how are you?", likes: 11},
//             ],
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Andrey"},
//                 {id: 2, name: "Sasha"},
//                 {id: 3, name: "Viktor"},
//                 {id: 4, name: "Valera"},
//             ],
//             messages: [
//                 {id: v1(), message: "Hi"},
//                 {id: v1(), message: "Hello"},
//                 {id: v1(), message: "How a u"}
//             ]
//         },
//     },
//     _onChange() {
//         console.log("state changed")
//     },
//     changeNewText(newText: string) {
//         this._state.messageForNewPost = newText
//         this._onChange(this._state)
//     },
//     addPost(postText: string) {
//         const newPost: PostType = {
//             id: v1(),
//             message: postText,
//             likes: 0
//         }
//         this._state.profilePage.posts.push(newPost)
//         this._onChange(this._state)
//     },
//     subscribe(callback: () => void) {
//         this._onChange = callback
//     },
//     _rerenderAllTree() {
//       this._rerenderAllTree()
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(store._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
//         this._rerenderAllTree()
//     }
// }

export type StoreType = {
    _state: RootStateType,
    addPost: (postText: string) => void
    _onChange: (state: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionDispatchType) => void
    _rerenderAllTree: () => void
}

export type ActionDispatchType = AddPostAT | ChangePostTextAT | AddMessageAT | AddLikeAT | FollowAT | UnfollowAT | SetUserAT | SetCurrentPageAT | SetUsersTotalCountAT | ToogleIsFetchingAT |SetUserProfileAT | SetUserDataAT |ToogleIsFollowingAT | SetUserStatusProfileAT |SetInitializedAT

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    usersPage:UsersPageType,
    auth:UserType
};
export type UserType = {
    id: number|null,
    email:string|null,
    login:string|null
    isAuth:boolean
}
export type PostType = {
    id: string;
    message: string;
    likes: number;
};
export type DialogType = {
    id: number;
    name: string;
};
export type UsersType = {
    id:number,
    photos:{
        small:string,
        large:string
    }
    followed:boolean,
    name:string,
    status:string,
    location:{
        country:string,
        city:string
    }
}
export type MessageType = {
    id: string,
    message: string
}
export type ProfilePageType = {
    posts: PostType[];
    newPostText:string,
    profile:ProfileType
    status:string
};
export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}
export type DialogsPageType = {
    dialogs: DialogType[];
    messages: MessageType[]
};
export type UsersPageType = {
    users:UsersType[]
    pageSize:number,
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:Array<number>
}
export type SidebarType = {};
// @ts-ignore
window.store = store