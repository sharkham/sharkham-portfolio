import React, { useState } from 'react';

const Project = (props) => {

  const { name, description, languages, github, moreinfo } = props.data;

  const [moreInfoVisibility, setMoreInfoVisibility] = useState(false);

  const toggleMoreInfo = (e) => {
    e.preventDefault()
    setMoreInfoVisibility(!moreInfoVisibility)
  }

  const moreInfo = () => {
    return (
      <p>{moreinfo}</p>
    )
  }

  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="project-languages">{languages}</p>
      <button onClick={(e) => toggleMoreInfo(e)}>More Info</button>
      {(moreInfoVisibility) && moreInfo()}
    </div>
  );
}

export default Project;
