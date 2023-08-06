import {DialogsPageType, MessageType} from "./store";
import {v1} from "uuid";
const initialState = {
        dialogs: [
            {id: 1, name: "Непобедимый",avatar:'https://avatars.dzeninfra.ru/get-zen_doc/1709006/pub_607b051b4e4db437d9a46222_607b052d90024f5c10a46608/scale_1200'},
            {id: 2, name: "Madara",avatar:'https://i.pinimg.com/736x/43/4a/ac/434aac5f413242f526bf0afd38290086.jpg'},
            {id: 3, name: "Pain",avatar:'https://i.pinimg.com/originals/9e/94/08/9e9408752e76e9251b1f3362b37bf950.png'},
            {id: 4, name: "Тянка",avatar:'https://pibig.info/uploads/posts/2021-04/1618979231_4-pibig_info-p-anime-naruto-personazhi-anime-krasivo-4.jpg'},
        ],
        messages: [
            {id: v1(), message: "Hi",avatar:'https://avatars.dzeninfra.ru/get-zen_doc/1709006/pub_607b051b4e4db437d9a46222_607b052d90024f5c10a46608/scale_1200'},
            {id: v1(), message: "Hello",avatar:'https://pibig.info/uploads/posts/2021-04/1618979231_4-pibig_info-p-anime-naruto-personazhi-anime-krasivo-4.jpg'},
            {id: v1(), message: "How a u",avatar:'https://pibig.info/uploads/posts/2021-04/1618979231_4-pibig_info-p-anime-naruto-personazhi-anime-krasivo-4.jpg'}
        ]
}
type AddMessageAT = ReturnType<typeof addMessageAC>
export type DialogsReducerAT = AddMessageAT
export const dialogsReducer = (state:DialogsPageType=initialState,action:DialogsReducerAT) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id:v1(),
                message:action.message
            }
            // state.messages.push(newMessage)
            let newState = {...state,messages: [...state.messages,newMessage]}
            return newState;
    }
    return state
}
export const addMessageAC = (message:string)=> {
    debugger
    return {type:"ADD-MESSAGE",message:message} as const
}