import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Player Management System</h2>
      <div className="button-grid">
        <Link to="/all-players" className="big-button">
          <img src="/assets/all-players.png" alt="All Players" />
          <span>All Players</span>
        </Link>
        <Link to="/search-by-team" className="big-button">
          <img src="/assets/team-search.png" alt="Search by Team" />
          <span>Search by Team</span>
        </Link>
        <Link to="/search-by-country" className="big-button">
          <img src="/assets/country-search.png" alt="Search by Country" />
          <span>Search by Country</span>
        </Link>
        <Link to="/search-by-position" className="big-button">
          <img src="/assets/position-search.png" alt="Search by Position" />
          <span>Search by Position</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
