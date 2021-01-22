import React from 'react';
import email from '../images/email-icon.png'

const Contact = () => {
  return (
    <div>
      <p>Looking for a developer? I'm looking for remote or Vancouver-based work opportunities and would love to hear from you!</p>
      <p>Want to chat about cats, Pokémon, or what makes a good critique? I love connecting with other devs—feel free to drop me a line!</p>
      <div className="contact-icons-div">
        <a href="mailto:sam.e.markham@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="Email icon" className="contact-icons" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
