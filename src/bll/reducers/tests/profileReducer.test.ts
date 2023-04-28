import {profilePageType} from "../../types";
import {addLike, addPostAC, deletePostAC, profileReducer, setStatusAC} from "../profileReducer";

let startState = {} as profilePageType
beforeEach(() => {
    startState = {
        postData: [
            {id: '1', message: 'Hi, how are you?', likes: 3},
            {id: '2', message: 'It\'s my first post', likes: 5},
            {id: '3', message: 'Hi, how are you?', likes: 67},
            {id: '4', message: 'Hi, how are you?', likes: 33},
            {id: '5', message: 'Smile today', likes: 9},
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
            photos: {
                small: '',
                large: '',
            }
        },
        status: ""
    }
})
test('Add post test',() => {
    const newPost = 'newPost'
    const endState = profileReducer(startState, addPostAC(newPost))
    expect(endState.postData.length).toBe(6)
})

test('Add likes to post', () => {
    const endState = profileReducer(startState, addLike(10, '5'))
    expect(endState.postData[4].likes).toBe(10)
})
test('Set new status', () => {
    const endState = profileReducer(startState, setStatusAC('newStatus'))
    expect(endState.status).toBe('newStatus')
})
test('Delete post (before deleting length post should be decrement)', () => {
    let action = deletePostAC('5')
    const endState = profileReducer(startState, action)
    expect(endState.postData.length).toBe(4)
})