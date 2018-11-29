// @flow
import * as React from 'react';
import './PlantHeader.css';

const PlantHeader = () => (
  <div className="App">
    <div
      style={{
        backgroundColor: '#98EC37',
        width: '100%',
        overflow: 'hidden',
        opacity: '0.666',
        height: '10vh'
      }}
    >
      <h2
        style={{
          textAlign: 'left',
          color: '#023B57',
          margin: '1%',
          padding: '0vh 5vw'
        }}
      >
        Pläpp
      </h2>
    </div>
  </div>
);

export default PlantHeader;
