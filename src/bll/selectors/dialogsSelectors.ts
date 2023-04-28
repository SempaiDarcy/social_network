import {stateType} from "../redux-store";

export const getDialogsData = (state: stateType) => {
    return state.dialogsPage.dialogsData
}
export const getMessagesData = (state: stateType) => {
    return state.dialogsPage.messagesData
}