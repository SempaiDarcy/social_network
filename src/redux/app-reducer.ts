import {setAuthTC} from "./auth-reducer";
import {DispatchType} from "./redux-store";

const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action: AppReducerAT) => {
    switch (action.type) {
        case "SET-INITIAL":
            return {
                ...state, initialized: true
            }
        default:
            return state
    }
}
export const setInitializedAC = () => {
    return {
        type: 'SET-INITIAL'
    } as const
}
export type SetInitializedAT = ReturnType<typeof setInitializedAC>
export type AppReducerAT = SetInitializedAT
export const setInitialTC = () => async (dispatch: DispatchType) => {
    Promise.all([dispatch(setAuthTC())])
        .then(()=>{
            dispatch(setInitializedAC())
        })
}