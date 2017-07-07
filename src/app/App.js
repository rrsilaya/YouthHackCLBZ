import React, { Component } from 'react';
import { BrowserRouter, withRouter, Switch, Route } from 'react-router-dom';

import '../assets/css/App.css';
import Admin from '../private-pages/AdminContainer';
import Home from '../public-pages/HomeContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter history={withRouter}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
