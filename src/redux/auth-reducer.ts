import {ActionDispatchType, UserType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

let initialState:UserType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export const authReducer = (state= initialState,action:ActionDispatchType):UserType => {
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
export const setAuthUserData = (id:number,email:string,login:string) => {
    return {
        type:"SET-USER-DATA",
        data:{
            id:id,
            email:email,
            login:login
        }
    } as const
}
export type SetUserDataAT = ReturnType<typeof setAuthUserData>
export const setAuthTC = () =>(dispatch:Dispatch) => {
    authAPI.getAuth().then((data)=>{
        if(data.resultCode===0) {
            let {id,login,email} = data.data
            dispatch(setAuthUserData(id,email,login))
        }
    })
}