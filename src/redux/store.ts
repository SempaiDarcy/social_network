import {NavbarType} from "../components/Navbar/Navbar";
import {v1} from "uuid";
import {path} from "../components/Constans/Constans";
import {PostType} from "../components/Profile/MyPosts/Posts/Post";
import {messageType, userNameType} from "../components/Dialogs/Dialogs";
import navbarReducer from "./navbar-reducer";
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type MessagesPageType = {
    userName: userNameType[]
    messages: messageType[]
    newMessageText: string
}
export type AppType = {
    navbar: NavbarType
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
}


// export type StoreType = {_state: AppType, _callSubscriber(state: AppType): void, getState(): AppType, subscribe(observer: (state: AppType) => void): void, dispatch(action: any): void}

export let store= {
    _state: <AppType>{
        navbar: {
            sidebar: [
                {id: v1(), path: path.PROFILE, title: 'Profile'},
                {id: v1(), path: path.DIALOGS, title: 'Messages'},
                {id: v1(), path: path.NEWS, title: 'News'},
                {id: v1(), path: path.MUSIC, title: 'Music'},
                {id: v1(), path: path.SETTINGS, title: 'Settings'},
            ],
            friends: {
                title: 'Friends',
                imgFriends: [
                    {
                        id: 1,
                        img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                        err: 'Error'
                    },
                    {
                        id: 2,
                        img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                        err: 'Error'
                    },
                    {
                        id: 3,
                        img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                        err: 'Error'
                    }
                ]
            }
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I am fine'}
            ],
            userName: [
                {
                    id: 1,
                    userName: 'Walter Wait',
                    img: ''
                },
                {
                    id: 2,
                    userName: 'Jesse Pinkman',
                    img: ''
                },
                {
                    id: 3,
                    userName: 'Hank Schreider',
                    img: ''
                },
                {
                    id: 4,
                    userName: 'Soul Goodman',
                    img: ''
                },
            ],
            newMessageText: ''

        },
        profilePage: {
            posts: [
                {
                    id: v1(),
                    likeCounts: 10,
                    mes: 'Hi',
                    photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
                    errorMes: 'Image not found'
                },
                {
                    id: v1(),
                    likeCounts: 15,
                    mes: "It's my first post",
                    photo: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
                    errorMes: 'Image not found'
                },
            ],
            newPostText: ''
        },
    },
    _callSubscriber(state: AppType) {
        console.log('rerender')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: AppType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)
        this._callSubscriber(this._state)
    }
}

