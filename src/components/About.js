import React from 'react';
import avatar from '../images/professional_avatar_2015 small.jpeg'

const About = () => {
  return (
    <div>
      <img id="avatar" src={avatar} alt="Sam, a smiling white person with short blue hair"/>
      <p>Full stack software engineer with experience in Ruby and Javascript, including Rails and React frameworks. Developing further skills in SQL and Postgres. </p>
      <p>My previous life includes a decade of experience in problem solving through writing, editing, critique and collaboration across many fields, from fiction and a published sociology paper to graphic novels and press releases.</p>
      <p>My blend of skills in collaboration, communication, analysis and creativity supplement my hard skills in coding. I enjoy putting my mind to a blank page and crafting something tangible and useful.</p>
    </div>
  );
}

export default About;
