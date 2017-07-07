import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imagesloaded from 'imagesloaded';

class Splash extends Component {
  componentWillMount() {
    imagesloaded('.img-splash', { background: '.lazy-load' }, () =>
      console.log('done')
    );
  }

  render() {
    return (
      <div className="img-splash">
        <div className="splash-title lazy-load uk-flex uk-flex-middle uk-flex-center">
          <div className="uk-text-center">
            <div className="splash-logo lazy-load" />
            <h1 id="yh-tagline">YouthHack CALABARZON</h1>
            <p className="uk-container uk-container-small white">
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet
            </p>
          </div>
        </div>
        <div className="splash-overlay lazy-load uk-flex uk-flex-bottom uk-flex-center">
          <Link
            to="/about"
            className="uk-button uk-button-large uk-margin-medium-bottom uk-text-bold learnbtn">
            Learn More
          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;
