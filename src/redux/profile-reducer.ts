import {ActionDispatchType, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";
let initialState = {
    newPostText: '',
    posts:[
        {id: v1(), message: "Hi, how are you?", likes: 12},
        {id: v1(), message: "Hi, how are you?", likes: 11},
    ]
}
export const profileReducer = (state:ProfilePageType = initialState,action:ActionDispatchType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            state.posts = [newPost, ...state.posts]
            return state
        }
        case "CHANGE-NEW-TEXT": {
            state.newPostText = action.newText
        }
    }
    return state
}