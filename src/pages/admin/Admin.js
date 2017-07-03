import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

class Admin extends Component {
  render() {
    return (
      <DocumentTitle title="YHCLBZ / Admin">
        <div className="gray full">
          <Navbar />
          <div className="uk-margin-medium-left uk-margin-medium-right uk-margin-large-top uk-margin-large-bottom">
            <div
              className="uk-section uk-section-default uk-grid uk-grid-collapse"
              data-uk-grid>
              <div className="uk-width-1-4@m uk-visible@m uk-padding-large divided">
                <Sidebar />
              </div>
              <div className="uk-width-3-4@m uk-width-1-1@s uk-padding-large">
                <Main />
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Admin;
