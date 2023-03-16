import React from 'react';
import classes from './Header.module.css'
import logo from '../img/logo.svg'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
    return <header className={classes.header}>
        <img src={logo} alt=""/>
        <div className={classes.loginBlock}>
            {props.authState.login
                ? props.authState.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;