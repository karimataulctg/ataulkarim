import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="logo">My Portfolio</div>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
