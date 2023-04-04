import {v1} from "uuid";
import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileStatusAPI} from "../api/api";



const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE_TEXT = "UPDATE_NEW_POST_MESSAGE_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type AddNewPostMessage = string
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    postsData: PostsType[]
    newPostText: AddNewPostMessage
    userProfile: UserProfileType | null
    status: string
}

let initialState = {
    postsData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'it s my first post', likesCount: 29},
        {id: v1(), message: 'it s my first post', likesCount: 14},
    ],
    newPostText: "",
    userProfile: null,
    status: ""
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {

        case ADD_POST:
            const newPost: PostsType =
                {
                    id: v1(),
                    message: state.newPostText,
                    likesCount: 0
                }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}

        case UPDATE_NEW_POST_MESSAGE_TEXT:
            return {...state, newPostText: action.postMess}

        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state

    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostMessageTextType = ReturnType<typeof updateNewPostMessageTextAC>
export type SetUserProfile = ReturnType<typeof setUserProfileAC>
export type SetProfileStatus = ReturnType<typeof setProfileStatusAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const updateNewPostMessageTextAC = (postMess: string) => {
    return {
        type: "UPDATE_NEW_POST_MESSAGE_TEXT",
        postMess: postMess
    } as const
}
export const setUserProfileAC = (userProfile: UserProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        userProfile
    }as const
}
export const setProfileStatusAC = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    }as const
}


//----------THUNK---------------------------------------------------------

export const getUserProfileInfoThunkCreator = (userId: string) => {

    return (dispatch: Dispatch) => {
        profileStatusAPI.getProfileInfo(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}
export const getProfileStatusThunkCreator = (userId: string) => {

    return (dispatch: Dispatch) => {
        profileStatusAPI.getProfileStatus(userId)
            .then(status => {
                dispatch(setProfileStatusAC(status))
        })
    }
}
export const updateProfileStatusThunkCreator = (status: string) => {

    return (dispatch: Dispatch) => {
        profileStatusAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatusAC(status))
                }
            })
    }
}