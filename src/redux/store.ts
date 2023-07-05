import {v1} from "uuid";
import {AddLikeAT, AddPostAT, ChangePostTextAT, profileReducer} from "./profile-reducer";
import {AddMessageAT, dialogsReducer} from "./dialogs-reducer";


export let store: StoreType = {
    _state: {
        user: {
            id: v1(),
            name: 'Akbar Gabdualiev',
            city: 'Uralsk',
            site: '-',
            avatar: "https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"
        },
        profilePage: {
            newPostText:'',
            posts: [
                {id: v1(), message: "Hi, how are you?", likes: 12},
                {id: v1(), message: "Hi, how are you?", likes: 11},
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
    },
    _onChange() {
        console.log("state changed")
    },
    // changeNewText(newText: string) {
    //     this._state.messageForNewPost = newText
    //     this._onChange(this._state)
    // },
    addPost(postText: string) {
        const newPost: PostType = {
            id: v1(),
            message: postText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange(this._state)
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    _rerenderAllTree() {
      this._rerenderAllTree()
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(store._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
        this._rerenderAllTree()
    }
}

export type StoreType = {
    _state: RootStateType,
    addPost: (postText: string) => void
    _onChange: (state: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionDispatchType) => void
    _rerenderAllTree: () => void
}

export type ActionDispatchType = AddPostAT | ChangePostTextAT | AddMessageAT | AddLikeAT

export type RootStateType = {
    user: UserType;
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};
export type UserType = {
    id: string,
    name: string,
    city: string,
    site: string,
    avatar: string
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

export type MessageType = {
    id: string,
    message: string
}
export type ProfilePageType = {
    posts: PostType[];
    newPostText:string
};
export type DialogsPageType = {
    dialogs: DialogType[];
    messages: MessageType[]
};
export type SidebarType = {};
// @ts-ignore
window.store = store