import {useState} from "react";

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    message: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type ProfilePageType = {
    posts: PostsType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 23},
            {id: 2, message: "It is my first post", likesCount: 11},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Walter Wait'},
            {id: 2, name: 'Jesse Pinkman'},
            {id: 3, name: 'Hank Schreider'},
            {id: 4, name: 'Soul Goodman'},
        ],
        messages: [
            {message: 'Hi'},
            {message: 'How are you?'},
            {message: 'I am fine'}]
    }

}
export let addPost = (postMessage:string) => {
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    // const [posts,setPosts]=useState(state.profilePage.posts)
    state.profilePage.posts.push(newPost)
    // setPosts([...posts,newPost])

}