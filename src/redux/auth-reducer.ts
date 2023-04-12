export const SET_USER_DATA = 'SET_USER_DATA'

export type AuthStateType = {
    id:string | null,
    email:string | null,
    login:string | null
    isAuth:boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state:AuthStateType = initialState, action: ActionType):AuthStateType => {
    console.log(state)
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload, isAuth:true
            }
        default:
            return state
    }
}
type ActionType = AuthReducerAT
type AuthReducerAT = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id:string, login: string, email: string) => ({type:SET_USER_DATA,
payload:{
    id, login, email
}} as const)
export default authReducer;