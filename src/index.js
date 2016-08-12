import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '~/containers/App.js';

import './styles/radiobutton.less';


ReactDOM.render(
  <App className="div-container" />,
  document.getElementById('root')
);
