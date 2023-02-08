import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


export type DialogType = {
    id: string
    name: string
}


const DialogItem = (props: DialogType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;