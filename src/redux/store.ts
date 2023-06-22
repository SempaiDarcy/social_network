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
                {id: 1, message: "Hi"}
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
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0
            }
            console.log(action.postText)
            this._state.profilePage.posts.push(newPost)
            this._onChange(this._state)
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.messageForNewPost = action.newText
            this._onChange(this._state)
        }
    }
}
export type StoreType = {
    _state: RootStateType,
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void
    _onChange: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostAT | ChangeTextAT) => void
}
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
    id: number,
    message: string
}
export type ProfilePageType = {
    posts: PostType[];
};
export type DialogsPageType = {
    dialogs: DialogType[];
    messages: MessageType[]
};
export type AddPostAT = {
    type: "ADD-POST",
    postText: string
}
export type ChangeTextAT = {
    type: 'CHANGE-NEW-TEXT',
    newText: string
}
export type SidebarType = {};
// @ts-ignore
window.store = store