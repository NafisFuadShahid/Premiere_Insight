import React from 'react';
import './PlayerModal.css'; // You can add your styles here

const PlayerModal = ({ player, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{player.name}</h2>
        <p><strong>Nation:</strong> {player.nation}</p>
        <p><strong>Position:</strong> {player.pos}</p>
        <p><strong>Age:</strong> {player.age}</p>
        <p><strong>Matches Played:</strong> {player.mp}</p>
        <p><strong>Starts:</strong> {player.starts}</p>
        <p><strong>Minutes:</strong> {player.min}</p>
        <p><strong>Goals:</strong> {player.gls}</p>
        <p><strong>Assists:</strong> {player.ast}</p>
        <p><strong>Penalty Kicks:</strong> {player.pk}</p>
        <p><strong>Card Yellows:</strong> {player.crdy}</p>
        <p><strong>Card Reds:</strong> {player.crdr}</p>
        <p><strong>XG:</strong> {player.xg}</p>
        <p><strong>XAG:</strong> {player.xag}</p>
        <p><strong>Team:</strong> {player.team}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PlayerModal;
