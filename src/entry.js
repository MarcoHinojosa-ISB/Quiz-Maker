import App from './components/App.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
