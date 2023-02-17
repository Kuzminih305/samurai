import {v1} from "uuid";
import {ActionsTypes, DialogPageType} from "./state";


const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

export const dialogReducer = (state: DialogPageType, action: ActionsTypes) => {
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