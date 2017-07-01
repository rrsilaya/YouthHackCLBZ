import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './app/AppContainer';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './assets/css/uikit.min.css';

UIkit.use(Icons);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
