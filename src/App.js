import React from "react";
import "./App.css";

//components
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory game</h1>
        <p>Match cards to win</p>
      </header>
      <div className="row">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div className="row">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div className="row">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div className="row">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
