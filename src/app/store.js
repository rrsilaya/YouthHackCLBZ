import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import login from '../private-pages/login/duck';

const store = createStore(
  combineReducers({ login }),
  {},
  applyMiddleware(thunk, logger)
);
export default store;
