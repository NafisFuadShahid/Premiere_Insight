import React from 'react';
import Button from './common/Button';
import './PlayerModal.css';

const PlayerModal = ({ player, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{player.name}</h2>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
        </div>
        <div className="player-details">
          <div className="detail-group">
            <h3>Basic Info</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span>Nation</span>
                <strong>{player.nation}</strong>
              </div>
              <div className="detail-item">
                <span>Position</span>
                <strong>{player.pos}</strong>
              </div>
              <div className="detail-item">
                <span>Age</span>
                <strong>{player.age}</strong>
              </div>
              <div className="detail-item">
                <span>Team</span>
                <strong>{player.team}</strong>
              </div>
            </div>
          </div>
          
          <div className="detail-group">
            <h3>Match Statistics</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span>Matches Played</span>
                <strong>{player.mp}</strong>
              </div>
              <div className="detail-item">
                <span>Starts</span>
                <strong>{player.starts}</strong>
              </div>
              <div className="detail-item">
                <span>Minutes</span>
                <strong>{player.min}</strong>
              </div>
            </div>
          </div>

          <div className="detail-group">
            <h3>Performance</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span>Goals</span>
                <strong>{player.gls}</strong>
              </div>
              <div className="detail-item">
                <span>Assists</span>
                <strong>{player.ast}</strong>
              </div>
              <div className="detail-item">
                <span>Penalty Kicks</span>
                <strong>{player.pk}</strong>
              </div>
              <div className="detail-item">
                <span>Expected Goals</span>
                <strong>{player.xg}</strong>
              </div>
              <div className="detail-item">
                <span>Expected Assists</span>
                <strong>{player.xag}</strong>
              </div>
            </div>
          </div>

          <div className="detail-group">
            <h3>Discipline</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span>Yellow Cards</span>
                <strong>{player.crdy}</strong>
              </div>
              <div className="detail-item">
                <span>Red Cards</span>
                <strong>{player.crdr}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;

