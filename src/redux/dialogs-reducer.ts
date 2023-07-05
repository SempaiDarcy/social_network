import {ActionDispatchType, DialogsPageType, MessageType} from "./store";
import {v1} from "uuid";
const initialState = {
        dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Viktor"},
            {id: 4, name: "Valera"},
        ],
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "Hello"},
            {id: v1(), message: "How a u"}
        ]
}
export const dialogsReducer = (state:DialogsPageType=initialState,action:ActionDispatchType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id:v1(),
                message:action.message
            }
            state.messages.push(newMessage)
    }
    return state
}
export const addMessageAC = (message:string):AddMessageAT => {
    return {type:"ADD-MESSAGE",message:message}
}
export type AddMessageAT = {
    type:"ADD-MESSAGE"
    message:string
}