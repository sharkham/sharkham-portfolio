import '../App.css';
import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="project-card">
        <h2>Novel Tracker App</h2>
        <p>A novel tracking app</p>
        <p className="project-languages">React, Redux, Rails (API), ReactStrap</p>
      </div>
      <div className="project-card">
        <h2>PokéTeamBuilder</h2>
        <p>A Pokémon size comparison app</p>
        <p className="project-languages">VanillaJS, Rails (API)</p>
      </div>
      <div className="project-card">
        <h2>Prompt Generator</h2>
        <p>A writing prompt generator</p>
        <p className="project-languages">React (functional), CSS</p>
      </div>
    </div>
  );
}

export default Projects;
