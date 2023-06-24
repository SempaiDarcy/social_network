import {ActionsType, MessageType} from "./store";
import {v1} from "uuid";

export const dialogsReducer = (state:MessageType[],action:ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id:v1(),
                message:action.newMessage
            }
            console.log(action.newMessage)
            state.push(newMessage)
    }
    return state
}