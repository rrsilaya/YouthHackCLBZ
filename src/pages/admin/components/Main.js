import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ROUTE } from '../../../global/constants';
import adminRoutes from './admin-routes';

class Main extends Component {
  render() {
    return (
      <div>
        {adminRoutes.map(
          (route, key) =>
            route.type === ROUTE
              ? <Route {...route} key={key} />
              : <Redirect {...route} key={key} />
        )}
      </div>
    );
  }
}

export default Main;
