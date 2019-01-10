// @flow
import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  toggleShowAbout: *
};

const AboutBtnContainer = styled.div({
  position: 'fixed',
  right: '1em',
  top: '0.5em',
  boxShadow: '10em',
  ':hover': {
    cursor: 'pointer'
  }
});

function AboutBtn(props: Props) {
  const { toggleShowAbout } = props;
  return (
    <AboutBtnContainer
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
        <circle cx="16" cy="16" r="16" fill="#2C3A47" strokeWidth="5" filter="url(#f1)" />
        <text
          style={{ font: 'bold 2em Quicksand' }}
          x="20%"
          y="45%"
          textAnchor="middle"
          fill="rgba(253, 114, 114,0.9)"
          dy=".3em"
        >
          ?
        </text>
      </svg>
    </AboutBtnContainer>
  );
}
export default AboutBtn;
