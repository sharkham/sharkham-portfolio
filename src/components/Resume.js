import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div>
      <p>Download my resume <Link to="/Sam-Markham-resume.pdf" target="_blank" download>here</Link>!</p>
    </div>
  );
}

export default Resume;
