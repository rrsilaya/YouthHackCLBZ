import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Switch, Route } from 'react-router-dom';

import Navbar from './global/Navbar';
import Splash from './global/Splash';
import PageContainer from './page-container/PageContainer';

import FullLoader from '../global/FullLoader';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="YouthHack CALABARZON">
        <div>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              component={() =>
                <Splash
                  imagesLoaded={this.props.imagesLoaded}
                  setImageLoaded={this.props.setImageLoaded}
                />}
            />
            <Route component={PageContainer} />
          </Switch>
          {/*<FullLoader />*/}
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
