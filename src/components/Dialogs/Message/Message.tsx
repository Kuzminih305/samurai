import React from 'react';
import classes from "../Dialogs.module.css";

type MessagePropsType = {
    message: string | number | symbol
}



const Message = (props:MessagePropsType) => {
    return (
        <div className={classes.massage}>
            {props.message}
        </div>
    )
}
export default Message;