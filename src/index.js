import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './app/AppContainer';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
