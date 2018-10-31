// @flow
import * as React from 'react';
import './PlantHeader.css';

const App = () => (
  <div className="App">
    <div
      style={{
        backgroundColor: '#98EC37',
        width: '100%',
        overflow: 'hidden'
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
      <span style={{ position: 'absolute', right: '1.5em', top: '1.5em', boxShadow: '10em' }}>
        <svg width="80" height="40">
          <defs>
            <filter id="f1" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="3" dy="4" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <circle cx="16" cy="16" r="16" fill="#555" strokeWidth="3" filter="url(#f1)" />
          <text x="20%" y="45%" textAnchor="middle" fill="#fff" dy=".3em">
            ?
          </text>
        </svg>
      </span>
    </div>
  </div>
);

export default App;
