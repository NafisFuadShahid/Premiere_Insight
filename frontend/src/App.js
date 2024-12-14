import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllPlayersPage from './pages/AllPlayersPage';
import SearchByTeamPage from './pages/SearchByTeamPage';
import SearchByCountryPage from './pages/SearchByCountryPage';
import SearchByPositionPage from './pages/SearchByPositionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/src/assets/messi.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/all-players" element={<AllPlayersPage />} />
              <Route path="/search-by-team" element={<SearchByTeamPage />} />
              <Route path="/search-by-country" element={<SearchByCountryPage />} />
              <Route path="/search-by-position" element={<SearchByPositionPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

