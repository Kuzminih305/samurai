import {v1} from "uuid";





export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    dispatch : (action: AddPostActionType) => void
}
export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

 export const store: StoreType = {
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
    dispatch(action){
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            store._state.profilePage.postsData.push(newPost)
            this._onChange()
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
}
export type DialogPageType = {
    dialogData: DialogType[]
    messagesData: MessageType[]
 }







