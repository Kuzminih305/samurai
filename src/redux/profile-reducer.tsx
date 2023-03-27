import {v1} from "uuid";
import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE_TEXT = "UPDATE_NEW_POST_MESSAGE_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
}

let initialState = {
    postsData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'it s my first post', likesCount: 29},
        {id: v1(), message: 'it s my first post', likesCount: 14},
    ],
    newPostText: "",
    userProfile: null
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
        default:
            return state

    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostMessageTextType = ReturnType<typeof updateNewPostMessageTextAC>
export type SetUserProfile = ReturnType<typeof setUserProfileAC>

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


//----------THUNK---------------------------------------------------------

export const getUserProfileInfoThunkCreator = (userId: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.getProfileInfo(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}