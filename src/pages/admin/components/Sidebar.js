import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className="uk-nav uk-nav-default">
      <li className="uk-nav-header">
        <NavLink to="/admin">Overview</NavLink>
      </li>
      <li className="uk-nav-header">Events</li>
      <li>
        <NavLink activeClassName="activeNav" to="/admin/events/list">
          <span
            className="uk-margin-small-right"
            data-uk-icon="icon: list"
          />List
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNav" to="/admin/events/forms">
          <span
            className="uk-margin-small-right"
            data-uk-icon="icon: file"
          />Forms
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
