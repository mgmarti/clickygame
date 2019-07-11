import React from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Title />
      <Navbar />
      <div className="wrapped">
        <Wrapper>
          {characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              width={character.width}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
}



export default App;
