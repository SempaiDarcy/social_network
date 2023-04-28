import {stateType} from "../redux-store";

export const getPostsData = (state: stateType) => {
    return state.profilePage.postData
}
export const getProfileData = (state: stateType) => {
    return state.profilePage.profile
}
export const getProfileStatus = (state: stateType) => {
    return state.profilePage.status
}