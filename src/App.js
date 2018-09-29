// @flow
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import PlantList from './List/PlantList.js';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <PlantList />
  </div>
);

export default App;
