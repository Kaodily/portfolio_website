import React from 'react';
import classes from "./Header.module.css";
import logo from '../../assets/logo.png'
import {RxHamburgerMenu} from "react-icons/rx"

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt='logo'/> 
    <RxHamburgerMenu color='white'  fontSize="1.8em" />
    </header>
  )
}

export default Header