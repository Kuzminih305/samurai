import React, {ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {DialogPageType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";



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
        dialogPage: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage: () => {dispatch((sendMessageAC()))},
        onUpdateNewMessageText: (body:string) => {dispatch(updateNewMessageTextAC(body))}
    }
}

export default compose<ComponentType>(
    connect (mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
) (Dialogs)

// let WithUrlDataContainerComponent = WithAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (WithUrlDataContainerComponent)
