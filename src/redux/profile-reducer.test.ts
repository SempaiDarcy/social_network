import {addPostAC, profileReducer} from "./profile-reducer";
import {v1} from "uuid";
it('length of posts should be incremented',()=> {
    //1 start test data
    let state = {
        newPostText: '',
        posts: [
            {id: v1(), message: "Hi, how are you?", likes: 12},
            {id: v1(), message: "Hello, I am fine", likes: 11},
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
        status: ''
    }
    let action= addPostAC('it-kamasutra')

    //2 action
    let newState = profileReducer(state, action)

    //3 exception
    expect(newState.posts.length).toBe(3); // проверяем количество постов в массиве
})
