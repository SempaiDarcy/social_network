export const SET_USER_DATA = 'SET_USER_DATA'

export type AuthStateType = {
    id:number | null,
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

const authReducer = (state:AuthStateType = initialState, action: any):AuthStateType => {
    console.log(state)
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth:true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data:AuthStateType) => ({type:SET_USER_DATA,data})
export default authReducer;