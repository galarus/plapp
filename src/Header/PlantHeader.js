// @flow
import * as React from 'react';
import './PlantHeader.css';
import AboutBtn from '../svg/AboutBtn';

const PlantHeader = () => (
  <div className="App">
    <div
      style={{
        backgroundColor: '#98EC37',
        width: '100%',
        overflow: 'hidden',
        opacity: '0.666'
      }}
    >
      <h1
        style={{
          textAlign: 'left',
          color: '#023B57',
          padding: '0.1vh 5vw'
        }}
      >
        Pläpp
      </h1>
      <AboutBtn />
    </div>
  </div>
);

export default PlantHeader;
