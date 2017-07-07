import { ROUTE, REDIRECT } from '../../global/constants';

import Overview from '../overview/Overview';
import List from '../events/List';
import Participants from '../events/Participants';
import EditEvent from '../events/components/EditEvent';

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
    type: ROUTE,
    exact: true,
    path: '/admin/events/list/:id',
    component: EditEvent
  },
  {
    type: ROUTE,
    exact: true,
    path: '/admin/events/participants',
    component: Participants
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
