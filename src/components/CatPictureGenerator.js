import React, { useState } from 'react';

const CatPictureGenerator = () => {

  const generate = () => {
    return Math.floor(Math.random() * 2)
    // return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  const [cat, setCat] = useState(() => generate())


  return (
    <div>
      <img className="cat-picture" src={`/wusser${cat}.jpg`} alt="cat picture"/>
      <button className="button-link" onClick={() => setCat(generate())}>New Cat Pic!</button>
    </div>
  );
}

export default CatPictureGenerator;
