import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {

  const { name, url, description, languages, github, moreinfo, image, livedemo, demovideo, relatedblogposts } = props.data;

  const [moreInfoVisibility, setMoreInfoVisibility] = useState(false);
  const [moreInfoText, setMoreInfoText] = useState("More Info")

  const toggleMoreInfo = (e) => {
    e.preventDefault()
    setMoreInfoVisibility(!moreInfoVisibility)
    if (moreInfoText === "More Info") {
      setMoreInfoText("Less Info")
    } else {
      setMoreInfoText("More Info")
    }
  }

  const moreInfo = () => {
    let demos
    if (livedemo && demovideo) {
      demos = <p><a href={livedemo} target="_blank" rel="noreferrer">Live Demo</a> | <a href={demovideo} target="_blank" rel="noreferrer">Demo Video</a></p>
    } else if (livedemo && !demovideo) {
      demos = <p><a href={livedemo} target="_blank" rel="noreferrer">Live Demo</a></p>
    } else if (!livedemo && demovideo) {
      demos = <p><a href={demovideo} target="_blank" rel="noreferrer">Demo Video</a></p>
    }
    let blogPosts
    if (relatedblogposts) {
      blogPosts = <div>
        <p>Related Blog Posts:</p>
        <ul>
          {relatedblogposts.map(post => {
            return <li><a href={post.url} target="_blank" rel="noreferrer">{post.title}</a></li>
          })}
        </ul>
      </div>
    }
    return (
      <div>
        <p>{moreinfo}</p>
        {demos}
        {blogPosts}
      </div>
    )
  }

  return (
    <div className="project-card">
      <h2><Link to={`/projects/${url}`}>{name}</Link></h2>
      <p>{description}</p>
      <img src={process.env.PUBLIC_URL + image} alt='Screenshot of app'/>
      <br/>
      <p className="project-languages">{languages}</p>
      <button className="button-link" onClick={(e) => toggleMoreInfo(e)}>{moreInfoText}</button>
      {(moreInfoVisibility) && moreInfo()}
    </div>
  );
}

export default Project;
