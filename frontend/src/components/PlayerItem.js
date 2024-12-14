import React from 'react';
import Button from './common/Button';
import './PlayerItem.css';

const PlayerItem = ({ player, onDelete, onClick }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(player.name);
  };

  return (
    <div className="player-item" onClick={onClick}>
      <div className="player-info">
        <h3>{player.name}</h3>
        <p className="team">{player.team}</p>
        <p className="stats">
          <span>{player.pos}</span>
          <span>•</span>
          <span>{player.nation}</span>
        </p>
      </div>
      <div className="player-actions">
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PlayerItem;

