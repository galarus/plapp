// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import 'typeface-quicksand';

const doc = document.getElementById('root');
if (doc) ReactDOM.render(<App />, doc);

registerServiceWorker();
