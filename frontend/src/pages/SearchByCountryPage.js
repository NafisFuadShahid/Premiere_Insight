import React, { useState } from 'react';
import { getPlayersByNation } from '../api';
import PlayerList from '../components/PlayerList';
import SearchBar from '../components/SearchBar';
import './SearchByCountryPage.css';

const SearchByCountryPage = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (country) => {
    setLoading(true);
    try {
      const playersData = await getPlayersByNation(country);
      setPlayers(playersData);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-by-country-page">
      <h2>Search by Country</h2>
      <SearchBar onSearch={handleSearch} placeholder="Enter country name..." />
      {loading && <div className="loading">Loading players...</div>}
      {!loading && searched && (
        players.length > 0 ? (
          <PlayerList players={players} />
        ) : (
          <div className="no-results">No players found for this country.</div>
        )
      )}
    </div>
  );
};

export default SearchByCountryPage;

