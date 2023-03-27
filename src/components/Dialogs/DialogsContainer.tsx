import React from 'react';
import Dialogs from "./Dialogs";
import {DialogPageType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";



export type MyDialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    dialogPage: DialogPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    onSendMessage: () => void
    onUpdateNewMessageText: (body: string) => void
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage: () => {dispatch((sendMessageAC()))},
        onUpdateNewMessageText: (body:string) => {dispatch(updateNewMessageTextAC(body))}
    }
}


export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)
