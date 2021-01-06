import React from 'react';
import { projects } from '../assets/projects';
import Project from './Project';

const Projects = () => {

  return (
    <div className="projects-container">
      {projects.map(project => {
        return <Project data={project} key={project.github}/>
      })}
    </div>
  );
}

export default Projects;
