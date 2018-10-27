// @flow
import * as React from 'react';
import './App.css';
import PlantList from './List/PlantList';
import PlantHeader from './Header/PlantHeader';
import PlantFooter from './Footer/PlantFooter';

const App = () => (
  <div className="App">
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <PlantHeader />
      <PlantList />
      <PlantFooter />
    </div>
  </div>
);

export default App;
