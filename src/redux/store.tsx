import {AddPostActionType, ProfilePageType, SetUserProfile, UpdateNewPostMessageTextType} from "./profile-reducer";
import {DialogPageType, SendMessageType, UpdateNewMessageTextType} from "./dialog-reducer";





export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: (state:StateType) => void
    subscribe: (callBack: (state: StateType) => void) => void
    dispatch : (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | UpdateNewMessageTextType | SendMessageType | UpdateNewPostMessageTextType | SetUserProfile


//  export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 3},
//                 {id: v1(), message: 'it s my first post', likesCount: 29},
//                 {id: v1(), message: 'it s my first post', likesCount: 14},
//             ],
//             newPostText: ""
//         },
//         dialogPage: {
//             dialogData: [
//                 {id: v1(), name: 'Dimych'},
//                 {id: v1(), name: 'Andrey'},
//             ],
//             messagesData: [
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'How is your it-kamasutra?'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'Yo'},
//             ],
//             newMessageText: ""
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action:ActionsTypes){
//        this._state.profilePage = profileReducer(this._state.profilePage, action)
//        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
//         this._onChange()
//     },
//     _onChange () {
//         console.log("dsa")
//     },
//     subscribe (callBack) {
//        this._onChange = callBack
//     }
// }


export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
// export type PostsType = {
//     id: string
//     message: string
//     likesCount: number
// }
// export type DialogType = {
//     id: string
//     name: string
// }
// export type MessageType = {
//     id: string
//     message: string
// }
// export type ProfilePageType = {
//     postsData: PostsType[]
//     newPostText: AddNewPostMessage
// }
// export type DialogPageType = {
//     dialogData: DialogType[]
//     messagesData: MessageType[]
//     newMessageText: NewMessageTextType
//
//  }
// export type NewMessageTextType = string
// export type AddNewPostMessage = string





