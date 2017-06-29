import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import auth from '../pages/duck';

const store = createStore(
  combineReducers({ auth }),
  {},
  applyMiddleware(thunk, logger)
);
export default store;
