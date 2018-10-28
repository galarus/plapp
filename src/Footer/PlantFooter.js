// @flow
import * as React from 'react';
import './PlantFooter.css';

const PlantFooter = () => (
  <div className="App">
    <div
      style={{
        padding: '2em',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        backgroundColor: '#891d00',
        color: '#f1f1f1',
        fontWeight: 'bold',
        flex: 1
      }}
    >
      Search ^
    </div>
  </div>
);

export default PlantFooter;
