import React from 'react';
import hero from '../assets/hero.jpeg'
import classes from './About.module.css'
import { Link } from 'react-router-dom';


const About = () => {
  return (
   <div>
   <div className={classes.hero_container}>
    <img className={classes.hero_image} src={hero} alt = 'hero' />
  </div>  
  <h3 className={classes.about_heading}>ABOUT ME</h3> 
  <p className={classes.about_me} >
  Hello! My name is Isizoh Chikaodili Modesta and I am a frontend developer with 2 years of experience in the field. I am passionate about creating beautiful, functional, and user-friendly websites that enhance the user experience.

<br/><br/>My journey as a frontend developer began 2 years ago when I discovered my love for web development. Since then, I have been constantly learning and improving my skills to stay up-to-date with the latest trends and technologies in the industry. <br/><br/> I have experience working with a variety of programming languages and frameworks, including HTML, CSS, JavaScript,and React.

As a frontend developer, I understand the importance of creating websites that are not only visually appealing but also responsive and optimized for performance. <br/><br/>I enjoy collaborating with designers and other developers to bring their visions to life and deliver high-quality products that exceed expectations.

In addition to my technical skills, I am a creative problem solver who enjoys tackling complex challenges and finding innovative solutions. <br/><br/>I am also a strong communicator who values teamwork and collaboration.

When I am not coding, you can find me exploring new places, reading books, or experimenting with new recipes in the kitchen. <br/><br/>I am a lifelong learner and am always looking for new opportunities to grow both personally and professionally.

Thank you for taking the time to learn more about me. If you have any questions or would like to connect, please feel free to reach out!
  </p>
 <div className={classes.button_container}>
 <Link to={'/project'}>
      <button className={classes.projects_button}>Projects</button>
      </Link>
 </div>
  </div>
  )
}

export default About