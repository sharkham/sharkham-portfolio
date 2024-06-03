import React from 'react';
import avatar from '../images/new_avatar.jpeg'

const About = () => {
  return (
    <div>
      <img id="avatar" src={avatar} alt="Sam, a smiling white person with short blue hair"/>
      <p>Hi, I’m Sam! Full stack software engineer, <a href="https://www.castofwonders.org/2024/05/cast-of-wonders-586-little-wonders-44-portal-fantasies/" target="_blank" rel="noreferrer" class="body-link">fiction writer</a>, and <a href="https://www.linkedin.com/posts/markhamsam_teamclio-lifeatclio-activity-7024175491976740864-969f?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noreferrer" class="body-link">ukulele player</a>.</p>
      <p>I have 3+ years experience building modern payments features in a primarily Rails codebase, and I’m interested in maintainable code and clear documentation—as well as the occasional video game hackathon project!</p>
      <p>My life before coding includes a decade of experience solving problems through writing, editing, critique and collaboration across many fields, from press releases to graphic novels. </p>
      <p>All of these skills come together to make me a collaborative, creative team member passionate about great user experiences. In code or in prose, I love putting my mind to a blank page and crafting something tangible and useful!</p>
      <p>If you’re looking for a motivated and detail-oriented programmer with solid communication skills, please <a href="mailto:sam.e.markham@gmail.com" target="_blank" rel="noreferrer" class="body-link">get in touch</a>.</p>
    </div>
  );
}

export default About;
