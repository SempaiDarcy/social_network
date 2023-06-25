import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type AddPostAT = ReturnType<typeof addPostAC>
export type AddMessageAT = ReturnType<typeof addMessageAC>
export type ChangePostTextAT = {
    type: 'CHANGE-NEW-TEXT',
    newText: string
}
export let store: StoreType = {
    _state: {
        messageForNewPost: "sdasda",
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 12},
                {id: 2, message: "Hi, how are you?", likes: 11},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Viktor"},
                {id: 4, name: "Valera"},
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "Hello"},
                {id: v1(), message: "How a u"}
            ]
        },
        sidebar: {},
    },
    _onChange() {
        console.log("state changed")
    },
    changeNewText(newText: string) {
        this._state.messageForNewPost = newText
        this._onChange(this._state)
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange(this._state)
    },
    subscribe(callback: (state: RootStateType) => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage.posts = profileReducer(store._state.profilePage.posts,action)
        this._state.dialogsPage.messages = dialogsReducer(store._state.dialogsPage.messages,action)
    }
}
export type StoreType = {
    _state: RootStateType,
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void
    _onChange: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionDispatchType) => void
}
export const addPostAC = (postText: string) => {
    return {type: "ADD-POST", postText} as const
}
export const addMessageAC = (newMessage: string) => {
    return {type: 'ADD-MESSAGE', newMessage} as const
}


export const changeNewTextAC = (newText: string): ChangePostTextAT => {
    return {type: "CHANGE-NEW-TEXT", newText}
}
export type ActionDispatchType = AddPostAT | ChangePostTextAT | AddMessageAT
export type RootStateType = {
    messageForNewPost: string
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SidebarType;
};
export type PostType = {
    id: number;
    message: string;
    likes: number;
};
export type DialogType = {
    id: number;
    name: string;
};

export type MessageType = {
    id: string,
    message: string
}
export type ProfilePageType = {
    posts: PostType[];
};
export type DialogsPageType = {
    dialogs: DialogType[];
    messages: MessageType[]
};
export type SidebarType = {};
// @ts-ignore
window.store = store