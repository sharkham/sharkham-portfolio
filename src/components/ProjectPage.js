import React from 'react';
import { projects } from '../assets/projects';
import { Link } from 'react-router-dom';

const ProjectPage = ({ match }) => {
  let project = null;

  const moreInfo = () => {
    let demos
    if (project.livedemo && project.demovideo) {
      demos = <p className="project-links"><a href={project.github} target="_blank" rel="noreferrer">Github</a> | <a href={project.livedemo} target="_blank" rel="noreferrer">Live Demo</a> | <a href={project.demovideo} target="_blank" rel="noreferrer">Demo Video</a></p>
    } else if (project.livedemo && !project.demovideo) {
      demos = <p className="project-links"><a href={project.github} target="_blank" rel="noreferrer">Github</a> | <a href={project.livedemo} target="_blank" rel="noreferrer">Live Demo</a></p>
    } else if (!project.livedemo && project.demovideo) {
      demos = <p className="project-links"><a href={project.github} target="_blank" rel="noreferrer">Github</a> | <a href={project.demovideo} target="_blank" rel="noreferrer">Demo Video</a></p>
    }
    let blogPosts
    if (project.relatedblogposts) {
      blogPosts = <div>
        <h3>Related Blog Posts:</h3>
        <ul>
          {project.relatedblogposts.map(post => {
            return <li><a href={post.url} target="_blank" rel="noreferrer">{post.title}</a></li>
          })}
        </ul>
      </div>
    }
    return (
      <div>
        <img className="project-page-image" src={`/${project.image}`} alt='Screenshot of app'/>
        <p>{project.moreinfo}</p>
        {demos}
        {blogPosts}
      </div>
    )
  }

  const displayProjectInfo = () => {
    // if (project !== null) {
      return (
        <>
          <h2 className="project-page">{ project.name }</h2>
          <Link className="button-link project-page project-page-button" to="/projects">Back</Link>
          { moreInfo() }
        </>
      )
    // } else {
    //   return <p>Invalid URL</p>
    // }
  }

  const nothingHere = () => {
    return <p>Invalid URL</p>
  }

  const validUrl = () => {

    projects.forEach(p => {
      if (p.url === match.params.url) {
        project = p
      }
    })
    if (project !== null) {
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
