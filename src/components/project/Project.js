import React from 'react';
import classes from "./Projects.module.css"

const Project = ({image,description,live,github,name}) => {
  return (
    <div className={classes.project_container}>
        <h3 className={classes.project_name}>{name}</h3>
    <div>
    <img className={classes.projects_image} src={image} alt="project" />
    </div>
    <p>{description}</p>
    <div className={classes.button_container}>
        <button className={classes.project_button}>
          <a className={classes.button_anchor} href={live} target='_blank' rel="noreferrer" >Live</a>
        </button>
        <button className={classes.project_button}>
        <a className={classes.button_anchor} href={github} target='_blank' rel="noreferrer" >Code</a>
        </button>
    </div>
    </div>
  )
}

export default Project