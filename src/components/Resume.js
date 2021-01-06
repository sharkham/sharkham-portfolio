import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <Link to="/Sam-Markham-resume.pdf" target="_blank" rel="noreferrer" download className="button-link">Resume</Link>
  );
}

export default Resume;
