import {ActionDispatchType, UserType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "./redux-store";

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
            }
    }
    return state
}
export const setAuthUserData = (id:number|null,email:string|null,login:string|null,isAuth:boolean) => {
    return {
        type:"SET-USER-DATA",
        data:{
            id:id,
            email:email,
            login:login,
            isAuth:isAuth
        }
    } as const
}
export type SetUserDataAT = ReturnType<typeof setAuthUserData>
export type AuthReducerAT = SetUserDataAT
export const setAuthTC = () =>(dispatch:Dispatch) => {
    authAPI.getAuth().then((data)=>{
        if(data.resultCode===0) {
            let {id,login,email} = data.data
            dispatch(setAuthUserData(id,email,login,true))
        }
    })
}
export const loginTC = (email:string,password:string,rememberMe=false) => (dispatch:ThunkDispatch<StateType, any, AuthReducerAT>) => {
    authAPI.login(email,password,rememberMe).then((data)=>{
        if (data.resultCode===0) {
            dispatch(setAuthTC())
        }
    })
}
export const logoutTC = () =>(dispatch:Dispatch)=> {
    authAPI.logout().then(data=>{
        if(data.resultCode===0) dispatch(setAuthUserData(null,null,null,false))
    })
}