import {v1} from "uuid";
import {ActionsTypes} from "./store";


const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";


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

export const dialogReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: v1(), message: body});
            return state
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