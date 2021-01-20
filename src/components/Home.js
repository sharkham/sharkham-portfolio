import React from 'react';
import CatPictureGenerator from './CatPictureGenerator';

const Home = () => {
  return (
    <div>
      <h3>Hi! I'm Sam, software engineer and writer.</h3>
      <p>This site was built with React and custom CSS. Click around to see more about me and my work, or enjoy some pictures of my cat here!</p>
      <CatPictureGenerator/>
    </div>
  );
}

export default Home;
