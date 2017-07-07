import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Navbar from './global/Navbar';
import Splash from './global/Splash';

import FullLoader from '../global/FullLoader';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="YouthHack CALABARZON">
        <div>
          <Navbar />
          <Splash />
          {/*<FullLoader />*/}
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
