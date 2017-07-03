import React from 'react';
import logo from '../../../assets/images/yhlogo.png';

import { Link } from 'react-router-dom';
import { BounceLoader } from 'halogen';

const Navbar = () => {
  return (
    <nav className="uk-navbar-container navbar uk-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <Link to="/admin" className="uk-navbar-item uk-logo">
          <img className="uk-border-circle" src={logo} alt="YH-logo" />
        </Link>
      </div>

      <div className="uk-navbar-center">
        <BounceLoader color="white" size="25px" />
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <button className="uk-button uk-button-link white">
              Options<span
                className="uk-margin-small-left"
                data-uk-icon="icon: triangle-down"
              />
            </button>
            <div className="uk-navbar-dropdown" data-uk-drop="mode: click">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: sign-out"
                  />Sign Out
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
