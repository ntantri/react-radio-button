import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
  <App className="div-container" store={store} history={hashHistory}/>,
  document.getElementById('root')
);
