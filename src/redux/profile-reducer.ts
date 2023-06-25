import {ActionDispatchType, PostType, ProfilePageType} from "./store";
let initialState ={
    posts:[
        {id: 1, message: "Hi, how are you?", likes: 12},
        {id: 2, message: "Hi, how are you?", likes: 11},
    ]
}
export const profileReducer = (state:ProfilePageType = initialState,action:ActionDispatchType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0
            }
            console.log(action.postText)
            state.posts.push(newPost)
    }
    return state
}