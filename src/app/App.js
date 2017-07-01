import React, { Component } from 'react';
import '../assets/css/App.css';

import {
  BrowserRouter,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ROUTE } from '../global/constants';
import publicRoute from './public-routes';
import privateRoute from './private-routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter history={withRouter}>
        <Switch>
          {publicRoute.map(
            (route, key) =>
              route.type === ROUTE
                ? route.path === '/login' && this.props.isAuth
                  ? ''
                  : <Route {...route} key={key} />
                : !this.props.isAuth ? <Redirect {...route} key={key} /> : ''
          )}
          {this.props.isAuth
            ? privateRoute.map(
                (route, key) =>
                  route.type === ROUTE
                    ? <Route {...route} key={key} />
                    : <Redirect {...route} key={key} />
              )
            : ''}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
