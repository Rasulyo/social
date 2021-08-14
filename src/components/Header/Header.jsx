import React from 'react'
import classes from './Header.module.css'
import logo from '../../logo.svg';

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
        </header>
    )
}

export default Header