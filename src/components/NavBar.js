import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <Link className="nav-link" to="/">Home</Link> */}
      <Link className="nav-link nav-link-first" to="/projects">Projects</Link>
      <div className="link-divider">|</div>
      <Link className="nav-link" to="/blog">Blog</Link>
      <div className="link-divider">|</div>
      <Link className="nav-link" to="/about">About</Link>
      <div className="link-divider">|</div>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;
