import React from "react";
import classes from "./Links.module.css";

const Links = ({ name, link }) => {
  return (
    <li>
      <a
        className={classes.social_item}
        href={link}
        target="_blank"
        rel="noreferrer">
        {name}
      </a>
    </li>
  );
};

export default Links;
