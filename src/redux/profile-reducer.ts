import {ActionDispatchType, PostType} from "./store";

export const profileReducer = (state:PostType[],action:ActionDispatchType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0
            }
            console.log(action.postText)
            state.push(newPost)
    }
    return state
}