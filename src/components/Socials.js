import React from 'react';
import dev from '../images/dev-icon.svg'
import email from '../images/email-icon.png'
import github from '../images/github-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import twitter from '../images/twitter-icon.png'

const Socials = () => {
  return (
    <div className="social-icons-div">
      <a href="https://dev.to/sharkham" target="_blank">
        <img src={dev} alt="DEV icon" className="social-icons" />
      </a>
      <a href="mailto:sam.e.markham@gmail.com" target="_blank">
        <img src={email} alt="Email icon" className="social-icons" />
      </a>
      <a href="https://github.com/sharkham" target="_blank">
        <img src={github} alt="GitHub icon" className="social-icons" />
      </a>
      <a href="https://www.linkedin.com/in/markhamsam/" target="_blank">
        <img src={linkedin} alt="LinkedIn icon" className="social-icons" />
      </a>
      <a href="https://twitter.com/sharkhamcodes" target="_blank">
        <img src={twitter} alt="Twitter icon" className="social-icons" />
      </a>
    </div>
  );
}

export default Socials;
