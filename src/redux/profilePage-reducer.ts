import {v1} from "uuid";
import {MyPostsType} from "../components/Profile/MyPosts/MyPosts";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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
}

const profilePageReducer = (state: MyPostsType = initialState, action: any): MyPostsType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                likeCounts: 0,
                mes: state.newPostText,
                photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
                errorMes: 'Image not found'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profilePageReducer

