import {messageType, userNameType} from "../components/Dialogs/Dialogs";
import {v1} from "uuid";

export type DialogType = {
    messages:messageType[]
    userName:userNameType[]
    newMessageText:string
}
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

let initialState = {
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'I am fine'},
        {id: '4', message: 'I want to buy a car'}
    ],
    userName: [
        {
            id: 1,
            userName: 'Walter Wait',
            img: ''
        },
        {
            id: 2,
            userName: 'Jesse Pinkman',
            img: ''
        },
        {
            id: 3,
            userName: 'Hank Schreider',
            img: ''
        },
        {
            id: 4,
            userName: 'Soul Goodman',
            img: ''
        },
    ],
    newMessageText: ''

    }

const messagesPageReducer = (state: DialogType = initialState, action: any): DialogType => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state, newMessageText: action.newMessageText
            }
        case SEND_NEW_MESSAGE_TEXT:
            let newMessage = {id: v1(), message: state.newMessageText}
            return {
                ...state, messages: [...state.messages, newMessage], newMessageText: ''
            }
        default:
            return state
    }
}


export const updateMessageDialogs = (mes: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: mes})
export const sendMessageDialogs = () => ({type: SEND_NEW_MESSAGE_TEXT})

export default messagesPageReducer