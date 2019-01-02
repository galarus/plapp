// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import 'typeface-quicksand';

// colors are in hsl
const theme = {
  ebonyClay: '209, 30%, 19%',
  madison: '210, 29%, 24%',
  shipsOfficer: '209, 23.5%, 22.5%',
  sasquachSocks: '342, 96.9%, 62.4%',
  georgiaPeach: '0, 97.2%, 72.0%',
  pineGlade: '67, 37%, 63.9%',
  sweetGarden: '46, 74%, 62%',
  gallery: '0, 0%, 93%'
};

const ThemedApp = () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Quicksand';
          height: 100%;
          width: 100vw;
          overflow: hidden;
        }
      `}
    />
    <App />
  </ThemeProvider>
);

const doc = document.getElementById('root');
if (doc) ReactDOM.render(<ThemedApp />, doc);

registerServiceWorker();
