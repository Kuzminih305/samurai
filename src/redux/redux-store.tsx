import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>



let store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))


export default store;