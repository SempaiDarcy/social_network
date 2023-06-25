import {ActionDispatchType, UserType} from "./store";
import {v1} from "uuid";

let initialState = {
        id: v1(),
        name: 'Akbar Gabdualiev',
        city: 'Uralsk',
        site: '-',
        avatar: "https://avatars.mds.yandex.net/i?id=0bbeac957963e13882ae83d5c690a08e603d7664-7803878-images-thumbs&n=13"
}

export const userReducer = (state: UserType = initialState, action: ActionDispatchType) => {
            return state
}