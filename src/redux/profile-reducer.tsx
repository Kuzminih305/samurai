import {v1} from "uuid";
import {ActionsTypes} from "./store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE_TEXT = "UPDATE_NEW_POST_MESSAGE_TEXT";

export type AddNewPostMessage = string
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: PostsType[]
    newPostText: AddNewPostMessage
}

let initialState = {
    postsData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'it s my first post', likesCount: 29},
        {id: v1(), message: 'it s my first post', likesCount: 14},
    ],
    newPostText: ""
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

        default:
            return state

    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostMessageTextType = ReturnType<typeof updateNewPostMessageTextAC>

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