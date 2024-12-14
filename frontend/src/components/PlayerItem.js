import React from 'react';

const PlayerItem = ({ player, onDelete, onClick }) => {
  return (
    <li onClick={onClick} style={{ cursor: 'pointer' }}>
      <strong>{player.name}</strong> ({player.team})
      <button onClick={(e) => { e.stopPropagation(); onDelete(player.name); }}>Delete</button>
    </li>
  );
};

export default PlayerItem;
