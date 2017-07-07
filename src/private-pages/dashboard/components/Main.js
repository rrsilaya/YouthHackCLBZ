import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { ROUTE } from '../../../global/constants';
import adminRoutes from '../admin-routes';

class Main extends Component {
  render() {
    return (
      <Switch>
        {adminRoutes.map(
          (route, key) =>
            route.type === ROUTE
              ? <Route {...route} key={key} />
              : <Redirect {...route} key={key} />
        )}
      </Switch>
    );
  }
}

export default Main;
