import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import Button from './components/common/Button';
import AddPlayerModal from './components/AddPlayerModal';
import './App.css';

function App() {
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const handleAddPlayer = () => {
    setIsAddingPlayer(true);
  };

  const handleCloseModal = () => {
    setIsAddingPlayer(false);
  };

  return (
    <div className="app">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/src/assets/messi.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <header>
          <h1>Player Management System</h1>
          <Button onClick={handleAddPlayer}>Add New Player</Button>
        </header>
        <main>
          <PlayerList />
        </main>
      </div>
      {isAddingPlayer && <AddPlayerModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;

