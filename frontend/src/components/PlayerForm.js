import React, { useState } from 'react';
import { addPlayer, updatePlayer } from '../api';

const PlayerForm = ({ playerToEdit }) => {
  const [player, setPlayer] = useState({
    name: '',
    nation: '',
    pos: '',
    age: '',
    team: '',
    // add other fields from Player
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (playerToEdit) {
      await updatePlayer(player);
    } else {
      await addPlayer(player);
    }
    setPlayer({
      name: '',
      nation: '',
      pos: '',
      age: '',
      team: '',
    });
  };

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{playerToEdit ? 'Edit Player' : 'Add Player'}</h2>
      <label>Name:</label>
      <input type="text" name="name" value={player.name} onChange={handleChange} />
      <label>Nation:</label>
      <input type="text" name="nation" value={player.nation} onChange={handleChange} />
      <label>Position:</label>
      <input type="text" name="pos" value={player.pos} onChange={handleChange} />
      <label>Age:</label>
      <input type="number" name="age" value={player.age} onChange={handleChange} />
      <label>Team:</label>
      <input type="text" name="team" value={player.team} onChange={handleChange} />
      <button type="submit">{playerToEdit ? 'Update' : 'Add'} Player</button>
    </form>
  );
};

export default PlayerForm;
