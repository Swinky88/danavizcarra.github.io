import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Dana Vizcarra</div>
      <div className="navbar-links">
        <Link to="/pages/home">Home</Link>
        <Link to="/pages/about">About</Link>
        <Link to="/pages/projects">Projects</Link>
        <Link to="/pages/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar; 