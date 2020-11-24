import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/projects">Projects</Link>
      <Link className="nav-link" to="/blog">Blog</Link>
      <Link className="nav-link" to="/resume">Resume</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;
