import React from 'react';
import Dialogs from "./Dialogs";
import {DialogPageType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";



// const DialogsContainer = () => {
//
//     return (
//         <div></div>
//         // <StoreContext.Consumer>
//         //     {(store) => {
//         //         const dialogsPageState = store.getState().dialogPage
//         //         const onSendMessageAC = () => store.dispatch(sendMessageAC())
//         //         const onUpdateNewMessageTextAC = (body: string) => store.dispatch(updateNewMessageTextAC(body))
//         //
//         //         return <Dialogs dialogsPageState={dialogsPageState}
//         //                      onSendMessageAC={onSendMessageAC}
//         //                      onUpdateNewMessageTextAC={onUpdateNewMessageTextAC}/>
//         //     }}
//         // </StoreContext.Consumer>
//     );
// };

export type MyDialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    dialogPage: DialogPageType
}
type MapDispatchToPropsType = {
    onSendMessage: () => void
    onUpdateNewMessageText: (body: string) => void
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage: () => {dispatch((sendMessageAC()))},
        onUpdateNewMessageText: (body:string) => {dispatch(updateNewMessageTextAC(body))}
    }
}


export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)
