import React from 'react';
import {ImLinkedin2, ImGithub ,ImTwitter , ImArrowUpRight2} from 'react-icons/im';
import classes from './Social.module.css'

const Social = () => {

  return (
    <div className={classes.social_container}>
     <a href='https://www.linkedin.com/in/chika-isizoh' target='_blank' rel="noreferrer">
     <button className={classes.icon_container}><ImLinkedin2/></button>
     </a>
          <a href='https://github.com/Kaodily' target='_blank' rel="noreferrer">
       <button className={classes.icon_container}>< ImGithub/></button>
       </a>
            <a href='https://twitter.com/ka_odily' target='_blank' rel="noreferrer"><button className={classes.icon_container}><ImTwitter/></button> </a>
           <a href='https://drive.google.com/drive/my-drive?ths=true' target='_blank' rel="noreferrer"> <button className={classes.icon_container}><ImArrowUpRight2/></button> </a>
    </div>
  )
}

export default Social