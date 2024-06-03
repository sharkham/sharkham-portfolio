import React from 'react';
import dev from '../images/dev-icon.svg'
import email from '../images/email-icon.png'
import github from '../images/github-icon.svg'
import linkedin from '../images/linkedin-icon.svg'

const Socials = () => {
  return (
    <div className="social-icons-div">
      <a href="mailto:sam.e.markham@gmail.com" target="_blank" rel="noreferrer">
        <img src={email} alt="Email icon" className="social-icons" />
      </a>
      <a href="https://dev.to/sharkham" target="_blank" rel="noreferrer">
        <img src={dev} alt="DEV icon" className="social-icons" />
      </a>
      <a href="https://github.com/sharkham" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub icon" className="social-icons" />
      </a>
      <a href="https://www.linkedin.com/in/markhamsam/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="LinkedIn icon" className="social-icons" />
      </a>
    </div>
  );
}

export default Socials;
