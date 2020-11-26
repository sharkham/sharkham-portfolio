import React from 'react';
import { projects } from '../assets/projects';
import Project from './Project';

const Projects = () => {

  return (
    <div className="grid-container">
      {projects.map(project => {
        return <Project data={project}/>
      })}
    </div>
  );
}

export default Projects;
