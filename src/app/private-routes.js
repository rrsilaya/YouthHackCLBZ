import { ROUTE, REDIRECT } from '../global/constants';

import Admin from '../pages/admin/AdminContainer';

const privateRoutes = [
  {
    type: ROUTE,
    path: '/admin',
    component: Admin
  },

  {
    type: REDIRECT,
    exact: true,
    from: '/login',
    to: '/admin'
  },
  {
    type: REDIRECT,
    to: '/admin'
  }
];

export default privateRoutes;
