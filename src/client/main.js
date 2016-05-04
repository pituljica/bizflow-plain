import App from './app/index.jsx'; // eslint-disable-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore()} >
    <App />
  </Provider>
, document.getElementById('hello'));
