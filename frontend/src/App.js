import React from 'react';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';

const App = () => {
  return (
    <div>
      <h1>Premier League Players</h1>
      <PlayerForm />
      <PlayerList />
    </div>
  );
};

export default App;
