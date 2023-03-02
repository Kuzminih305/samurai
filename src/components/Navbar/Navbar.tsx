import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.mav}>
            <div className={classes.item}>
                <NavLink to={"/Profile"}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/Dialogs"}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/Users"}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/News"}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/Music"}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/Settings"}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;