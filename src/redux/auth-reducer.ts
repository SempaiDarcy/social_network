import {ActionDispatchType} from "./store";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export const authReducer = (state=initialState,action:ActionDispatchType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
    }
    return state
}
export const setAuthUserData = (userId:string,email:string,login:string) => {
    return {
        type:"SET-USER-DATA",
        data:{
            userId:userId,
            email:email,
            login:login
        }
    } as const
}
export type SetUserDataAT = ReturnType<typeof setAuthUserData>