import React from 'react';
import classes from './Explore.module.css'
import { Link } from 'react-router-dom';

const Explore = () => {
    const profession = ['Software developer ', 'Technical Writer']
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>ISIZOH <br/> CHIKAODILI <br/> MODESTA </h1>
      <ul className={classes.list}>
        {profession.map((item,index)=> <li className={classes.list_item} key={index}>{item}</li>)}
      </ul>
      <Link to={'/about'}>
      <button className={classes.explore_button}>Explore</button>
      </Link>
    </div>
  )
}

export default Explore