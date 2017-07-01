import { ROUTE, REDIRECT } from '../../../global/constants';

import Overview from './Overview';
import List from './events/List';

const adminRoutes = [
  {
    type: ROUTE,
    exact: true,
    path: '/admin',
    component: Overview
  },
  {
    type: ROUTE,
    exact: true,
    path: '/admin/events/list',
    component: List
  },

  {
    type: REDIRECT,
    exact: true,
    from: '/admin/events',
    to: '/admin/events/list'
  },
  {
    type: REDIRECT,
    to: '/admin'
  }
];

export default adminRoutes;
