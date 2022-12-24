import React from 'react';
import classes from './Header.module.css'
import logo from '../img/logo.svg'

const Header = () => {
    return <header className={classes.header}>
        <img src={logo} alt=""/>
    </header>
}

export default Header;