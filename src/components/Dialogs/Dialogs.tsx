import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MyDialogsPropsType} from "./DialogsContainer";




const Dialogs = (props: MyDialogsPropsType) => {

    const dialogElement = props.dialogPage.dialogData.map(el =>
        (<DialogItem key={el.id} name={el.name} id={el.id}/>))


    const messageElement = props.dialogPage.messagesData.map(el =>
        (<Message key={el.id} message={el.message}/>))

    const newMessageBody = props.dialogPage.newMessageText;


    const onClickHandler = () => {
        props.onSendMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.onUpdateNewMessageText(body)
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