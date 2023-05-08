import React from 'react';
import hero from '../assets/hero.jpeg';
import classes from './About.module.css';



const About = () => {
  const stacks = ['HTML','CSS','Tailwind','Styled Components','JavaScript (ES6)','TypeScript','React Js','Redux','Zustand' ]
  return (
   <div>
   <div className={classes.hero_container}>
    <img className={classes.hero_image} src={hero} alt = 'hero' />
  </div>  
  <p className={classes.about_me} >
  Hello! My name is Isizoh Chikaodili Modesta and I am a frontend developer with 1+ years of experience in the field.
My journey as a frontend developer began 2 years ago when I discovered my love for web development.<br/><br/> Since then, I have been constantly learning and improving my skills to stay up-to-date with the latest trends and technologies in the industry.
In addition to my technical skills, I am a creative problem solver who enjoys tackling complex challenges and finding innovative solutions. 
  </p>
  <h3 className={classes.about_heading}>TECH STACK</h3> 
  <div className={classes.stack_list}>
    {stacks.map((stack,index) =>  <button key={index} className={classes.stacks_button}>{stack}</button>)}
  </div>
 {/* <div className={classes.button_container}>
 <Link to={'/project'}>
      <button className={classes.projects_button}>Projects</button>
      </Link>
 </div> */}
  </div>
  )
}

export default About