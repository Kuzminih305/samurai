import {v1} from "uuid";
import {ActionsTypes} from "./store";


const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type NewMessageTextType = string
export type DialogPageType = {
    dialogData: DialogType[]
    messagesData: MessageType[]
    newMessageText: NewMessageTextType

}

let initialState = {
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

export const dialogReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.body}

        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {...state, newMessageText: "", messagesData: [...state.messagesData, {id: v1(), message: body}]}

        default:
            return state
    }
}

export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextAC>
export type SendMessageType = ReturnType<typeof sendMessageAC>

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