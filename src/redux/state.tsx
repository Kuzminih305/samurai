import {v1} from "uuid";
import {renderTree} from "../index";


// let renderTree = () => {
//     console.log("dsa")
// }
// export subscribe = (callBack: () => void) => {
//     renderTree = callBack
// }

export type StoreType = {
    _state: StateType
    addPost: (postText: string) => void
    getState: () => StateType
}


const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 3},
                {id: v1(), message: 'it s my first post', likesCount: 29},
                {id: v1(), message: 'it s my first post', likesCount: 14},

            ]
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
            ]
        }
    },
    addPost(postText: string) {
        const newPost: PostsType = {
            id: v1(),
            message: postText,
            likesCount: 0
        }
        store._state.profilePage.postsData.push(newPost)
        renderTree(store)
    },
    getState() {
        return this._state
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
}
export type DialogPageType = {
    dialogData: DialogType[]
    messagesData: MessageType[]
 }







export default store;