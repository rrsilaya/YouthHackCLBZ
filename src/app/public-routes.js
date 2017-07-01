import { ROUTE, REDIRECT } from '../global/constants';

import Home from '../pages/public/Home';
import Login from '../pages/login/LoginContainer';

const publicRoutes = [
  {
    type: ROUTE,
    exact: true,
    path: '/',
    component: Home
  },
  {
    type: ROUTE,
    exact: true,
    path: '/login',
    component: Login
  },

  {
    type: REDIRECT,
    from: '/admin',
    to: '/login'
  },
  {
    type: REDIRECT,
    to: '/'
  }
];

export default publicRoutes;
