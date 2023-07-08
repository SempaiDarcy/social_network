import {ActionDispatchType, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";
let initialState = {
    newPostText: '',
    posts:[
        {id: v1(), message: "Hi, how are you?", likes: 12},
        {id: v1(), message: "Hello, I am fine", likes: 11},
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
            let newState = {...state, posts: [newPost,...state.posts]}
            return newState
        }
        case "CHANGE-NEW-TEXT": {
            let newState = {...state}
            newState.newPostText = action.newText
            return newState
        }
        case "ADD-LIKE": {
            let newState = {...state,posts:state.posts.map((el)=>el.id===action.id?{...el,likes:action.count}:el)}
            return newState
        }
    }
    return state
}
export const addPostAC = () => {
    return {type:"ADD-POST"} as const
}
export type AddPostAT = ReturnType<typeof addPostAC>
export const changeNewTextAC = (newText:string):ChangePostTextAT => {
    return {type:"CHANGE-NEW-TEXT",newText:newText}
}
export type ChangePostTextAT = {
    type:"CHANGE-NEW-TEXT",
    newText:string
}
export const addLikeAC = (count:number,id:string) => {
    return {type:"ADD-LIKE",count:count,id:id} as const
}
export type AddLikeAT = ReturnType<typeof addLikeAC>