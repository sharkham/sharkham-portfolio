import React from 'react';

const Project = (props) => {

  let { name, description, languages, github } = props.data;
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="project-languages">{languages}</p>
    </div>
  );
}

export default Project;
