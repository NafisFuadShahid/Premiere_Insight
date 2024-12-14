import React, { useState } from 'react';
import Button from './common/Button';
import './PlayerForm.css';

const PlayerForm = ({ onSubmit, initialData = {} }) => {
  const [player, setPlayer] = useState({
    name: '',
    nation: '',
    pos: '',
    age: '',
    team: '',
    ...initialData
  });

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(player);
  };

  return (
    <form onSubmit={handleSubmit} className="player-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={player.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="nation">Nation:</label>
        <input
          type="text"
          id="nation"
          name="nation"
          value={player.nation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pos">Position:</label>
        <input
          type="text"
          id="pos"
          name="pos"
          value={player.pos}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={player.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="team">Team:</label>
        <input
          type="text"
          id="team"
          name="team"
          value={player.team}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PlayerForm;

