import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Premiere Insights</h1>
      <nav>
        <Link to="/" className="nav-link button-link">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
