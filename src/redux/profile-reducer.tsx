import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType} from "./state";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE_TEXT = "UPDATE_NEW_POST_MESSAGE_TEXT";


export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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