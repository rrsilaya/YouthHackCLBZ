import React from 'react';
import logo from '../../../assets/images/yhlogo.png';

const Navbar = () => {
  return (
    <nav className="uk-navbar-container navbar" data-uk-navbar>
      <div className="uk-navbar-center">
        <a href="a.html" className="uk-navbar-item uk-logo">
          {logo}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
