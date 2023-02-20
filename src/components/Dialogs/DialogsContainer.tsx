import React from 'react';
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
import StoreContext from "../../StoreContext";


type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const dialogsPageState = store.getState().dialogPage
                const onSendMessageAC = () => store.dispatch(sendMessageAC())
                const onUpdateNewMessageTextAC = (body: string) => store.dispatch(updateNewMessageTextAC(body))

                return <Dialogs dialogsPageState={dialogsPageState}
                             onSendMessageAC={onSendMessageAC}
                             onUpdateNewMessageTextAC={onUpdateNewMessageTextAC}/>
            }}
        </StoreContext.Consumer>
    );
};
export default DialogsContainer;