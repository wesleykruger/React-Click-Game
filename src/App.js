import React from 'react';
import Nav from './components/Nav/Nav';
import CharacterCard from './components/characterCard';
import './App.css';

function App() {
    return (
      <div className="App">
        <Nav />
        <CharacterCard />
      </div>
    );
}

export default App;
