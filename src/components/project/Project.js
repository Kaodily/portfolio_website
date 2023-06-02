import React from "react";
import classes from "./Projects.module.css";
import { AiOutlineGithub } from "react-icons/ai";

const Project = ({ image, description, live, github, name }) => {
  return (
    <div className={classes.project_container}>
      <div className={classes.project_name}>
        <h3>{name}</h3>
        <a href={github} target="_blank" rel="noreferrer">
          <AiOutlineGithub color="black" fontSize="20px" />
        </a>
      </div>
      <a href={live} target="_blank" rel="noreferrer">
        <img className={classes.projects_image} src={image} alt="project" />
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Project;
