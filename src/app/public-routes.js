import { ROUTE, REDIRECT } from '../global/constants';

import Home from '../pages/public/HomeContainer';
import Login from '../pages/login/LoginContainer';

const publicRoutes = [
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
    type: ROUTE,
    exact: true,
    path: '/',
    component: Home
  },
  {
    type: REDIRECT,
    to: '/'
  }
];

export default publicRoutes;
