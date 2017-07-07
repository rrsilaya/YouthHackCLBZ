import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="img-splash">
      <div className="splash-title uk-flex uk-flex-middle uk-flex-center">
        <div className="uk-text-center">
          <div className="splash-logo" />
          <h2 id="yh-tagline">YouthHack CALABARZON</h2>
        </div>
      </div>
      <div className="splash-overlay uk-flex uk-flex-bottom uk-flex-center">
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
