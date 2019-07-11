import React from 'react';
import './App.css';
import CharacterCard from './components/CharacterCards';
import characters from "./characters.json"

function App() {
  return (
    <div className="App">
      <h1>Deploy testing</h1>
      <CharacterCard 
        image={characters[0].image} />
    </div>
  );
}

export default App;
