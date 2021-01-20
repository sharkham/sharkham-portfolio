import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {

  const { name, url, description, languages } = props.data;

  return (
    <div className="project-card">
      <h2><Link to={`/projects/${url}`}>{name}</Link></h2>
      <p>{description}</p>
      <p className="project-languages">{languages}</p>
    </div>
  );
}

export default Project;
