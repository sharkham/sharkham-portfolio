import React from 'react';
import avatar from '../images/professional_avatar_2015 small.jpeg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <img id="avatar" src={avatar} alt="Sam, a smiling white person with short blue hair"/>
      <p>Hi I’m Sam! Full stack software engineer, blogger, fiction writer and former book publicist.</p>
      <p>My life before coding includes a decade of experience through solving problems through writing, editing, critique and collaboration across many fields, from press releases and a published sociology paper to graphic novels and fiction.</p>
      <p>All the skills I’ve gathered along the way have facilitated a new-found expertise in building tangible and useful products using Ruby and JavaScript, like an <Link to={`/projects/novel-tracker-app`}>app for a novel contest</Link>, built with Ruby on Rails and React, that allows participants to keep track of their writing progress.</p>
      <p>I’m on the lookout for new opportunities remotely or in Vancouver, BC, where I’m based, so if you’re looking for a motivated and detail-oriented programmer with solid communication skills and three years of experience with remote work, please <a href="mailto:sam.e.markham@gmail.com" target="_blank" rel="noreferrer">get in touch!</a></p>
    </div>
  );
}

export default About;
