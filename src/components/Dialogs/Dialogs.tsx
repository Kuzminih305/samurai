import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPageType, sendMessageAC, StoreType, updateNewMessageTextAC} from "../../redux/state";

type DialogsPageType = {
    store: StoreType
    state: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

 const Dialogs = (props: DialogsPageType) => {

    const dialogElement = props.state.dialogData.map(el =>
        (<DialogItem name = {el.name} id = {el.id}/>))


    const messageElement = props.state.messagesData.map(el =>
        (<Message message ={el.message}/>))

    const newMessageBody = props.state.newMessageText;


     const onClickHandler = () => {
         props.dispatch(sendMessageAC())
     }
     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
         props.dispatch(updateNewMessageTextAC(body))
     }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElement}
            </div>
            <div className={classes.massages}>
                <div>{messageElement}</div>
                <div>
                    <input type={"text"}
                           value={newMessageBody}
                           onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    )


}





export default Dialogs;