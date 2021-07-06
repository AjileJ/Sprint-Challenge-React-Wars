import React from 'react';
import PeopleGrid from './components/PeopleGrid';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleGrid />
      <footer>By: Jordan Athey</footer>
    </div>
  );
}

export default App;
