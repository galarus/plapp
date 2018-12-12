// @flow
import * as React from 'react';

type Props = {
  toggleShowAbout: *
};

function AboutBtn(props: Props) {
  const { toggleShowAbout } = props;
  return (
    <div
      style={{
        position: 'fixed',
        right: '10%',
        top: '1%',
        boxShadow: '10em'
      }}
      role="button"
      tabIndex="-100"
      onKeyDown={toggleShowAbout}
      onClick={toggleShowAbout}
    >
      <svg width="80" height="40">
        <defs>
          <filter id="f1" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="3" dy="4" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <circle
          cx="16"
          cy="16"
          r="16"
          fill="rgba(255,67,3,0.5)"
          strokeWidth="3"
          filter="url(#f1)"
        />
        <text x="20%" y="45%" textAnchor="middle" fill="#fff" dy=".3em">
          ?
        </text>
      </svg>
    </div>
  );
}
export default AboutBtn;