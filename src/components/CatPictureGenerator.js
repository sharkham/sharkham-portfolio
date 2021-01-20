import React, { useState } from 'react';

const CatPictureGenerator = () => {

  const generate = () => {
    return Math.floor(Math.random() * 2)
    // return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [cat, setCat] = useState(() => generate())


  return (
    <div>
      <button className="button-link cat-generator-button" onClick={() => setCat(generate())}>New Cat Pic!</button>
      <img className="cat-picture" src={`/wusser${cat}.jpg`} alt="cat picture"/>
    </div>
  );
}

export default CatPictureGenerator;
