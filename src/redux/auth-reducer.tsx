import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

export type AuthStatePropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


let initialState: AuthStatePropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state:AuthStatePropsType = initialState, action: ActionsType):AuthStatePropsType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: true
            }
        default:
            return state;

    }
}

export type ActionsType = SetUserData
export type SetUserData = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (data: AuthStatePropsType) => {
    return {
        type: SET_AUTH_USER_DATA,
        data
    } as const
}

//----------------THUNK----------------------------------
export const getAuthUserDataThunkCreator = () => {

    return (dispatch: Dispatch) => {
        authAPI.authMy()
            .then(response => {
                if(response.data.resultCode === 0)
            dispatch(setAuthUserData(response.data.data))
        })
    }
}


