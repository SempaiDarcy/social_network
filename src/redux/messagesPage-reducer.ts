import {DialogType} from "../components/Dialogs/Dialogs";
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine'}
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
            state.newMessageText = action.newMessageText
            return state
        case SEND_NEW_MESSAGE_TEXT:
            let newMessage = {id: 5, message: state.newMessageText}
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}


export const updateMessageDialogs = (mes: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: mes})
export const sendMessageDialogs = () => ({type: SEND_NEW_MESSAGE_TEXT})

export default messagesPageReducer