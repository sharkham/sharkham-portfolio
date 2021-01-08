import React from 'react';
import { projects } from '../assets/projects';

const ProjectPage = ({ match }) => {
  const matchUrls = () => {
    //if the URL typed in matches one of the projects:
    //load that page
    //else:
    //display an error
    const projectUrls = projects.map(project => {return project.url})
    if (!projectUrls.includes(match.params.url)) {
      console.log("not here")
      return false
    }
  }

  return (
    <div>
      { matchUrls() }
    </div>
  );
}

export default ProjectPage;
