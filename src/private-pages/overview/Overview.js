import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Stats from './components/Stats';

class Overview extends Component {
  render() {
    return (
      <DocumentTitle title="YHCLBZ / Overview">
        <div>
          <h1 className="uk-heading-divider">Overview</h1>
          <p>
            If you are seeing this, you must be an administrator of the
            YouthHack CALABARZON website!
          </p>

          <Stats />
        </div>
      </DocumentTitle>
    );
  }
}

export default Overview;
