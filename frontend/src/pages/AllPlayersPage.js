import React, { useState, useEffect } from 'react';
import { getPlayers } from '../api';
import PlayerList from '../components/PlayerList';
import SearchBar from '../components/SearchBar';
import './AllPlayersPage.css';

const AllPlayersPage = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playersData = await getPlayers();
        setPlayers(playersData);
        setFilteredPlayers(playersData);
      } catch (error) {
        console.error('Error fetching players:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  if (loading) {
    return <div className="loading">Loading players...</div>;
  }

  return (
    <div className="all-players-page">
      <h2>All Players</h2>
      <SearchBar onSearch={handleSearch} />
      <PlayerList players={filteredPlayers} />
    </div>
  );
};

export default AllPlayersPage;

