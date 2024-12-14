import React, { useState, useEffect } from 'react';
import { getPlayers, deletePlayer } from '../api';
import PlayerItem from './PlayerItem';
import PlayerModal from './PlayerModal';
import SearchBar from './SearchBar';
import './PlayerList.css';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  useEffect(() => {
    const filtered = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchTerm, players]);

  const handleDelete = async (name) => {
    try {
      await deletePlayer(name);
      setPlayers(players.filter(player => player.name !== name));
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <div className="loading">Loading players...</div>;
  }

  return (
    <div className="player-list">
      <h2>Players List</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="list-container">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <PlayerItem
              key={player.name}
              player={player}
              onDelete={handleDelete}
              onClick={() => handlePlayerClick(player)}
            />
          ))
        ) : (
          <div className="no-results">
            {searchTerm ? "No players found matching your search." : "No players available. Add some players to get started!"}
          </div>
        )}
      </div>
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default PlayerList;

