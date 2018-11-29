// @flow
import * as React from 'react';

const AddBtn = () => (
  <svg
    width="110"
    height="110"
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="f2" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="3" dy="4" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <circle cx="50" cy="50" r="50" fill="#55E102" filter="url(#f2)" />
    <path
      d="M 51 21 V 81 M 18 51 H 85"
      stroke="#2C8DAD"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AddBtn;
