import React from 'react';
import { projects } from '../assets/projects';
import Project from './Project';

const Projects = () => {

  return (
    <div>
      {projects.map(project => {
        return <Project/>
      })}
      <div className="project-card">
        <h2>PokéTeamBuilder</h2>
        <p>A Pokémon size comparison app</p>
        <p className="project-languages">VanillaJS, Rails (API)</p>
      </div>
    </div>
  );
}

export default Projects;
