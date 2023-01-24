import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPageType = {
    state: DialogPageType
}

 const Dialogs = (props: DialogsPageType) => {

    const dialogElement = props.state.dialogData.map(el =>
        (<DialogItem name = {el.name} id = {el.id}/>))


    const messageElement = props.state.messagesData.map(el =>
        (<Message message ={el.message}/>))


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElement}


                {/*<DialogItem name = {dialogData[0].name} id = {dialogData[0].id}/>*/}
                {/*<DialogItem name = {dialogData[1].name} id = {dialogData[1].id}/>*/}
            </div>
            <div className={classes.massages}>
                {messageElement}


                {/*<Message message ={messagesData[0].message}/>*/}
                {/*<Message message ={messagesData[1].message}/>*/}
                {/*<Message message ={messagesData[2].message}/>*/}
            </div>
        </div>
    )


}





export default Dialogs;