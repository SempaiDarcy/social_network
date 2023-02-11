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
    newPostText: ''
}

const profilePageReducer = (state: MyPostsType = initialState, action: any): MyPostsType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                likeCounts: 0,
                mes: state.newPostText,
                photo: "https://citaty.info/files/characters/82733_0.jpg",
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

