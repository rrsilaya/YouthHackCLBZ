import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Navbar from './components/Navbar';
import Splash from './components/Splash';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="YouthHack CALABARZON">
        <div>
          <Navbar />
          <Splash />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
