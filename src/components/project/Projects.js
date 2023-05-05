import React from 'react'
import Project from './Project';
import classes from "./Projects.module.css"
import audiophile from "../assets/audiophile.png";
import country from "../assets/country.png";
import starfinder from "../assets/starfinder.png";

const Projects = () => {
  return (
      <div className={classes.container}>
       <Project image={audiophile} name={'AUDIOPHILE'}  live={'https://audiophile-kaodily.netlify.app/'} github={'https://github.com/Kaodily/Audiophile'} description={"An e-commerce app comes with a built-in cart and checkout feature, providing you with a seamless and hassle-free shopping experience. Easily add items to your cart, review your selections, and securely checkout with just a few taps."} /> 
      <Project image={starfinder} name={'STARFINDER'}   live={'https://starfinder.dev/'} github={'https://github.com/workshopapps/vipcustomer.web'} description={"An app that offers a VIP notification feature that alerts you when a high-profile user engages with your app. This valuable feature allows you to keep track of VIP activity and respond promptly to their needs, enhancing the overall user experience. "} /> 
      <Project image={country}  name={'WHERE IN THE WORLD'}   live={'https://rest-api-kaodily.netlify.app/'} github={'https://github.com/Kaodily/Rest-Api'} description={"This app provides details about all the countries in the world, their population and language"} />
    </div>
  )
}

export default Projects