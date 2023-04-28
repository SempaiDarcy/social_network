import {ActionDispatchType, AuthDataType} from "../types";
import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../../api/api";
import {stateType} from "../redux-store";
import {ThunkDispatch} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL = 'AUTH/GET_CAPTCHA_URL'

const initState: AuthDataType = {
    id: null,
    login: '',
    email: '',
    isAuth: false,
    captchaURL: null
}

export type AuthReducerAT = SetUserDataAT | GetCaptchaUrlAT
export type SetUserDataAT = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlAT = ReturnType<typeof getCaptchaUrlAC>


export const authReducer = (state = initState, action: AuthReducerAT): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case "AUTH/GET_CAPTCHA_URL":
            return {
                ...state,
                captchaURL: action.url
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string, email: string, isAuth: boolean = false) => {
    return {type: SET_USER_DATA, data: {id, login, email, isAuth}} as const
}

export const getCaptchaUrlAC = (captchaURL: string | null) => {
    return {type: GET_CAPTCHA_URL, url: captchaURL} as const
}

export const setAuthUserTC = () => async (dispatch: Dispatch<AuthReducerAT>) => {
    const response = await authAPI.getAuth()
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: ThunkDispatch<stateType, any, ActionDispatchType | FormAction>) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) { // status OK
                dispatch(setAuthUserTC())
            } else if (response.data.resultCode === 10) { // captcha
                dispatch(getCaptchaUrl())
            } else {
                dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
            }
}
export const logoutTC = () => async (dispatch: Dispatch<AuthReducerAT>) => {
    const response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, '', '', false))
            }
}

export const getCaptchaUrl = () =>  async (dispatch: Dispatch<AuthReducerAT>) => {
    const response = await securityAPI.getCaptcha()
    dispatch(getCaptchaUrlAC(response.data.url))
}