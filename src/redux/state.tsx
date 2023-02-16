import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE_TEXT = "UPDATE_NEW_POST_MESSAGE_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    dispatch : (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | UpdateNewMessageTextType | SendMessageType | UpdateNewPostMessageTextType


type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextAC>
type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewPostMessageTextType = ReturnType<typeof updateNewPostMessageTextAC>


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
export const updateNewMessageTextAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        body: body
    }as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE",
    }as const
}


 export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 3},
                {id: v1(), message: 'it s my first post', likesCount: 29},
                {id: v1(), message: 'it s my first post', likesCount: 14},
            ],
            newPostText: ""
        },
        dialogPage: {
            dialogData: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrey'},
            ],
            messagesData: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-kamasutra?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
            ],
            newMessageText: ""
        }
    },
    // addPost(postText: string) {
    //     const newPost: PostsType = {
    //         id: v1(),
    //         message: postText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._onChange()
    // },
    getState() {
        return this._state;
    },
    dispatch(action:ActionsTypes){
        if (action.type === ADD_POST) {
            let postMess = this._state.profilePage.newPostText;
            const newPost: PostsType =
                {
                    id: v1(),
                    message: postMess,
                    likesCount: 0
                }
                this._state.profilePage.newPostText = ''
            this._state.profilePage.postsData.push(newPost)
            this._onChange()
        }else if (action.type === UPDATE_NEW_POST_MESSAGE_TEXT) {
            this._state.profilePage.newPostText = action.postMess
            this._onChange()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.body;
            this._onChange()
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageText;
            this._state.dialogPage.newMessageText = '';
            this._state.dialogPage.messagesData.push({id: v1(), message: body});
            this._onChange();
        }
    },
    _onChange () {
        console.log("dsa")
    },
    subscribe (callBack) {
       this._onChange = callBack
    }
}


export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type ProfilePageType = {
    postsData: PostsType[]
    newPostText: AddNewPostMessage
}
export type DialogPageType = {
    dialogData: DialogType[]
    messagesData: MessageType[]
    newMessageText: NewMessageTextType

 }
export type NewMessageTextType = string
export type AddNewPostMessage = string





