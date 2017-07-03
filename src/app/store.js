import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import auth from '../pages/duck';
import login from '../pages/login/duck';

const store = createStore(
  combineReducers({ auth, login }),
  {},
  applyMiddleware(thunk, logger)
);
export default store;
