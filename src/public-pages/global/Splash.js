import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import splash from '../../assets/images/splash.jpg';
import splashOverlay from '../../assets/images/splash-overlay.png';
import logo from '../../assets/images/yhlogo.png';

import FullLoader from '../../global/FullLoader';

import imagesloaded from 'imagesloaded';

class Splash extends Component {
  componentDidMount() {
    imagesloaded('.img-splash', { background: '.lazy-load' }, () =>
      this.props.setImageLoaded()
    );
  }

  render() {
    return (
      <div className="img-splash uk-inline">
        <div>
          <div className="splash-title uk-flex uk-flex-middle uk-flex-center">
            <div className="uk-text-center">
              <div className="splash-logo" />
              <h1 id="yh-tagline">YouthHack CALABARZON</h1>
              <p className="uk-container uk-container-small white">
                Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet
              </p>
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

        {this.props.imagesLoaded
          ? ''
          : [
              <div className="uk-position-cover white-container" />,
              <div className="uk-overlay uk-height-1-1">
                <FullLoader />
              </div>
            ]}
      </div>
    );
  }
}

export default Splash;
