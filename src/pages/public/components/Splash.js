import React from 'react';
import { Link } from 'react-router-dom';

import cover from '../../../assets/images/splash.jpg';
import overlay from '../../../assets/images/splash-overlay.png';
import logo from '../../../assets/images/yhlogo.png';

const Splash = () => {
  return (
    <div className="img-splash" style={{ backgroundImage: `url(${cover})` }}>
      <div className="splash-title uk-flex uk-flex-middle uk-flex-center">
        <div className="uk-text-center">
          <div
            className="splash-logo"
            style={{ backgroundImage: `url(${logo})` }}
          />
          <h2 id="yh-tagline">YouthHack CALABARZON</h2>
        </div>
      </div>
      <div
        className="splash-overlay uk-flex uk-flex-bottom uk-flex-center"
        style={{ backgroundImage: `url(${overlay})` }}>
        <Link
          to="/about"
          className="uk-button uk-button-large uk-margin-medium-bottom uk-text-bold learnbtn">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Splash;
