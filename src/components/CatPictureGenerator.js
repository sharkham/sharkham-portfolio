import React, { useState } from 'react';

const CatPictureGenerator = () => {

  const generate = () => {
    return Math.floor(Math.random() * 11)
    // return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [cat, setCat] = useState(() => generate())


  return (
    <div>
      <button className="button-link cat-generator-button" onClick={() => setCat(generate())}>New Cat Pic!</button>
      <img className="cat-picture" src={`/wusser${cat}.jpg`} alt="a small, elderly tortoiseshell cat"/>
    </div>
  );
}

export default CatPictureGenerator;
