import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/store";


type DialogsPageType = {
    dialogsPageState: DialogPageType
    onSendMessageAC: () => void
    onUpdateNewMessageTextAC: (body: string) => void
}

const Dialogs = (props: DialogsPageType) => {

    const dialogElement = props.dialogsPageState.dialogData.map(el =>
        (<DialogItem name={el.name} id={el.id}/>))


    const messageElement = props.dialogsPageState.messagesData.map(el =>
        (<Message message={el.message}/>))

    const newMessageBody = props.dialogsPageState.newMessageText;


    const onClickHandler = () => {
        props.onSendMessageAC()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.onUpdateNewMessageTextAC(body)
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