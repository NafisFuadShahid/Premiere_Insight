import React, { useState } from 'react';
import { getPlayersByPos } from '../api';
import PlayerList from '../components/PlayerList';
import SearchBar from '../components/SearchBar';
import './SearchByPositionPage.css';

const SearchByPositionPage = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (position) => {
    setLoading(true);
    try {
      const playersData = await getPlayersByPos(position);
      setPlayers(playersData);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-by-position-page">
      <h2>Search by Position</h2>
      <SearchBar onSearch={handleSearch} placeholder="Enter position..." />
      {loading && <div className="loading">Loading players...</div>}
      {!loading && searched && (
        players.length > 0 ? (
          <PlayerList players={players} />
        ) : (
          <div className="no-results">No players found for this position.</div>
        )
      )}
    </div>
  );
};

export default SearchByPositionPage;

