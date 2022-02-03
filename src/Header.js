import React from 'react';

import logo from './assest/images/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <img src={logo} alt="amazon" />
        </header>
    )

}

export default Header;