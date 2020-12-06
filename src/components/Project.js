import React, { useState } from 'react';

const Project = (props) => {

  const { name, description, languages, github, moreinfo, image, livedemo, demovideo, relatedblogposts } = props.data;

  const [moreInfoVisibility, setMoreInfoVisibility] = useState(false);

  const toggleMoreInfo = (e) => {
    e.preventDefault()
    setMoreInfoVisibility(!moreInfoVisibility)
  }

  const moreInfo = () => {
    let demos
    if (livedemo && demovideo) {
      demos = <p><a href={livedemo} target="_blank">Live Demo</a> | <a href={demovideo} target="_blank">Demo Video</a></p>
    } else if (livedemo && !demovideo) {
      demos = <p><a href={livedemo} target="_blank">Live Demo</a></p>
    } else if (!livedemo && demovideo) {
      demos = <p><a href={demovideo} target="_blank">Demo Video</a></p>
    }
    let blogPosts
    if (relatedblogposts) {
      blogPosts = <div>
        <p>Related Blog Posts:</p>
        <ul>
          {relatedblogposts.map(post => {
            return <li><a href={post.url} target="_blank">{post.title}</a></li>
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
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={process.env.PUBLIC_URL + image} alt='Screenshot of app'/>
      <br/>
      <p className="project-languages">{languages}</p>
      <button onClick={(e) => toggleMoreInfo(e)}>More Info</button>
      {(moreInfoVisibility) && moreInfo()}
    </div>
  );
}

export default Project;
