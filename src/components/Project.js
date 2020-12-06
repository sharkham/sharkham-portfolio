import React, { useState } from 'react';

const Project = (props) => {

  const { name, description, languages, github, moreinfo, image, livedemo, demovideo } = props.data;

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
    return (
      <div>
        <p>{moreinfo}</p>
        {demos}
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
