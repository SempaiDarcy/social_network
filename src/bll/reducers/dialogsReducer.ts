import { dialogsPageType} from "../types";
import {v1} from "uuid";

const ADD_MESSAGE = 'DIALOGS/ADD-MESSAGE'
const initialState = {
    dialogsData: [
        {
            id: v1(),
            name: "Viktor",
            avatar: "https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"
        },
        {id: v1(), name: 'Boris', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: v1(), name: 'Veronika', avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
    ],
    messagesData: [
        {id: v1(), message: "Hello!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {
            id: v1(),
            message: 'How are you?',
            avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
        },
        {
            id: v1(),
            message: 'Ayyyyyyyyy!!!!!',
            avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
        },
        {
            id: v1(),
            message: 'a part that combines with other parts to form something bigger:' +
                '                        "television/aircraft/computer components' +
                '                        "The factory supplies electrical components for cars.' +
                '                        "The course has four main components: business law, finance, computing and management skills.' +
                '                        "Fresh fruit and vegetables are an essential component of a healthy diet.' +
                '                        "The control of inflation is a key component of the governments economic policy.',
            avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
        },
        {id: v1(), message: "Hey!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'}
    ]
}
type AddMessageAT = ReturnType<typeof addMessageAC>
export type DialogsReducerAT = AddMessageAT

export const dialogsReducer = (state: dialogsPageType = initialState, action: DialogsReducerAT) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage = {
                id: v1(),
                message: action.message
            };
            return {...state, messagesData: [...state.messagesData, newMessage]}
        }
        default:
            return state
    }
}

//action creators
export const addMessageAC= (message: string) => {
    return {type: ADD_MESSAGE, message: message} as const
}