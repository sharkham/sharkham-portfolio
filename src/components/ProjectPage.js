import React from 'react';
import { projects } from '../assets/projects';

const ProjectPage = ({ match }) => {
  let project = null;

  const displayProjectInfo = () => {
    // if (project !== null) {
      console.log(project.name)
      return (
        <div>{ project.name }</div>
      )
    // } else {
    //   return <p>Invalid URL</p>
    // }
  }

  const nothingHere = () => {
    console.log("nothinghere")
    return <div>Invalid URL</div>
  }

  const validUrl = () => {
    //if the URL typed in matches one of the projects:
    //load that page
    //else:
    //display an error
    // const projectUrls = projects.map(p => {return p.url})
    // if (!projectUrls.includes(match.params.url)) {
    //   console.log("not here")
    //   return false
    // }

    projects.forEach(p => {
      if (p.url === match.params.url) {
        project = p
        console.log(p)
      //   return true
      //   // return displayProjectInfo()
      //   // return p.title
      // } else {
      //   console.log("not here")
      //   return false
      }
    })
    if (project !== null) {
      console.log("true")
      return true
    }
  }


  return (
    <div>
      { validUrl() ? displayProjectInfo() : nothingHere() }
    </div>
  );
}

export default ProjectPage;
