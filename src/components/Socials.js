import React from 'react';
import dev from '../images/dev-icon.svg'
import email from '../images/email-icon.png'
import github from '../images/github-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import twitter from '../images/twitter-icon.png'

const Socials = () => {
  return (
    <div>
      <img src={dev} alt="DEV icon" className="social-icons" />
      <img src={email} alt="Email icon" className="social-icons" />
      <img src={github} alt="LinkedIn icon" className="social-icons" />
      <img src={linkedin} alt="GitHub icon" className="social-icons" />
      <img src={twitter} alt="Twitter icon" className="social-icons" />
    </div>
  );
}

export default Socials;
