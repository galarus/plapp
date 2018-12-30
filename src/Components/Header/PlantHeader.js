// @flow
// import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const HeaderTitle = styled.h2({
  textAlign: 'left',
  color: '#55E6C1',
  margin: '1%',
  padding: '0vh 5vw'
});

const PlantHeader = () => (
  <div className="App">
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        height: '3em'
      }}
    >
      <HeaderTitle>Pläpp</HeaderTitle>
    </div>
  </div>
);

export default PlantHeader;
