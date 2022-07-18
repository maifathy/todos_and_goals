import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import middleware from './middleware';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
