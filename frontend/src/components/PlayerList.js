import React, { useState, useEffect } from 'react';
import { getPlayers, deletePlayer } from '../api';
import PlayerItem from './PlayerItem';
import PlayerModal from './PlayerModal';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getPlayers();
      setPlayers(playersData);
    };

    fetchPlayers();
  }, []);

  const handleDelete = async (name) => {
    await deletePlayer(name);
    setPlayers(players.filter(player => player.name !== name));
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div>
      <h2>Players List</h2>
      <ul>
        {players.map((player) => (
          <PlayerItem
            key={player.name}
            player={player}
            onDelete={handleDelete}
            onClick={() => handlePlayerClick(player)}
          />
        ))}
      </ul>

      {selectedPlayer && <PlayerModal player={selectedPlayer} onClose={handleCloseModal} />}
    </div>
  );
};

export default PlayerList;
