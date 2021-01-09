import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {

  const { name, url, description, languages, github, image } = props.data;

  return (
    <div className="project-card">
      <h2><Link to={`/projects/${url}`}>{name}</Link></h2>
      <p>{description}</p>
      <img src={process.env.PUBLIC_URL + image} alt='Screenshot of app'/>
      <br/>
      <p className="project-languages">{languages}</p>
    </div>
  );
}

export default Project;
