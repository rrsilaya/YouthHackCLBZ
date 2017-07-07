import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="uk-navbar-container uk-width-1-1 public-nav uk-container"
      data-uk-navbar
      data-uk-sticky>
      <div className="uk-navbar-left">
        <Link to="/" className="uk-navbar-item uk-logo uk-visible@s">
          <img src="images/yhlogo.png" alt="YH-logo" />
        </Link>

        <button
          className="uk-button uk-hidden@s uk-padding-remove uk-margin-small-left"
          data-uk-icon="icon: menu"
        />
      </div>

      <div className="uk-navbar-center uk-hidden@s">
        <Link to="/" className="uk-navbar-item uk-logo">
          <img src="images/yhlogo.png" alt="YH-logo" />
        </Link>
      </div>

      <div className="uk-navbar-right uk-visible@s">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink
              activeClassName="activeNav"
              className="uk-button uk-button-text navlink"
              to="/events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activeNav"
              className="uk-button uk-button-text navlink"
              to="/milestones">
              Milestones
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activeNav"
              className="uk-button uk-button-text navlink"
              to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
