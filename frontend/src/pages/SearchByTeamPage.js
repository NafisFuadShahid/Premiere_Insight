import React, { useState } from 'react';
import { getPlayersFromTeam } from '../api';
import PlayerList from '../components/PlayerList';
import SearchBar from '../components/SearchBar';
import './SearchByTeamPage.css';

const SearchByTeamPage = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (team) => {
    setLoading(true);
    try {
      const playersData = await getPlayersFromTeam(team);
      setPlayers(playersData);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-by-team-page">
      <h2>Search by Team</h2>
      <SearchBar onSearch={handleSearch} placeholder="Enter team name..." />
      {loading && <div className="loading">Loading players...</div>}
      {!loading && searched && (
        players.length > 0 ? (
          <PlayerList players={players} />
        ) : (
          <div className="no-results">No players found for this team.</div>
        )
      )}
    </div>
  );
};

export default SearchByTeamPage;

