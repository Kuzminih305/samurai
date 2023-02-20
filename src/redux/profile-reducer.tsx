import {v1} from "uuid";
import {ActionsTypes, PostsType} from "./store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE_TEXT = "UPDATE_NEW_POST_MESSAGE_TEXT";

let initialState = {
    postsData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'it s my first post', likesCount: 29},
        {id: v1(), message: 'it s my first post', likesCount: 14},
    ],
    newPostText: ""
}


export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let postMess = state.newPostText;
            const newPost: PostsType =
                {
                    id: v1(),
                    message: postMess,
                    likesCount: 0
                }
            state.newPostText = ''
            state.postsData.push(newPost)
            return state
        case UPDATE_NEW_POST_MESSAGE_TEXT:
            state.newPostText = action.postMess
            return state
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostMessageTextType = ReturnType<typeof updateNewPostMessageTextAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    }as const
}
export const updateNewPostMessageTextAC = (postMess: string) => {
    return {
        type: "UPDATE_NEW_POST_MESSAGE_TEXT",
        postMess: postMess
    }as const
}