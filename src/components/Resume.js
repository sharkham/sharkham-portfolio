import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <Link to="/Sam-Markham-resume.pdf" target="_blank" download className="resume">Resume</Link>
  );
}

export default Resume;
