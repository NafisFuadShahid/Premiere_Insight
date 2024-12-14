import React from 'react';
import PlayerForm from './PlayerForm';
import Button from './common/Button';
import './AddPlayerModal.css';

const AddPlayerModal = ({ onClose }) => {
  const handleSubmit = async (playerData) => {
    // Here you would typically call an API to add the player
    console.log('Adding player:', playerData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Player</h2>
        <PlayerForm onSubmit={handleSubmit} />
        <Button onClick={onClose} variant="danger">Cancel</Button>
      </div>
    </div>
  );
};

export default AddPlayerModal;

