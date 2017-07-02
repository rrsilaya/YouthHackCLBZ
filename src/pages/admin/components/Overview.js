import React, { Component } from 'react';

import Stats from './overview/Stats';

class Overview extends Component {
  render() {
    return (
      <div>
        <h1 className="uk-heading-divider">Overview</h1>
        <p>
          If you are seeing this, you must be an administrator of the YouthHack
          CALABARZON website!
        </p>

        <Stats />
      </div>
    );
  }
}

export default Overview;
