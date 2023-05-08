import React from 'react';
import classes from "./Header.module.css";
import {RxHamburgerMenu} from "react-icons/rx"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
   <Link to={'/'} style={{textDecoration:'none'}}> <h3 className={classes.logo}>Kaodili</h3> </Link>
    <RxHamburgerMenu color='white'  fontSize="1.8em" />
    </header>
  )
}

export default Header