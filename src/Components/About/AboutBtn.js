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
        right: '1em',
        top: '0.5em',
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
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <circle
          cx="16"
          cy="16"
          r="16"
          fill="rgba(253, 114, 114,0.6)"
          strokeWidth="3"
          filter="url(#f1)"
        />
        <text x="20%" y="45%" textAnchor="middle" fill="#2C3A47" dy=".3em">
          ?
        </text>
      </svg>
    </div>
  );
}
export default AboutBtn;
