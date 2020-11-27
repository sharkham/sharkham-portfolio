import React from 'react';
import dev from './dev.to-icon.svg'
import email from './email-icon.svg'
import github from './github-icon.svg'
import linkedin from './linkedin-icon.svg'
import twitter from './twitter-icon.svg'

const Socials = () => {
  return (
    <div className="social-icons">
      <img src={dev} alt="DEV icon"/>
      <img src={email} alt="Email icon"/>
      <img src={github} alt="LinkedIn icon"/>
      <img src={linkedin} alt="GitHub icon"/>
      <img src={twitter} alt="Twitter icon"/>

    </div>
  );
}

export default Socials;
