import React, { Component } from 'react';

import FullLoader from '../global/FullLoader';
import Dashboard from './dashboard/Dashboard';
import Login from './login/LoginContainer';

class Admin extends Component {
  render() {
    return this.props.isRequestingAuth
      ? <FullLoader />
      : this.props.isAuth ? <Dashboard /> : <Login />;
  }
}

export default Admin;
