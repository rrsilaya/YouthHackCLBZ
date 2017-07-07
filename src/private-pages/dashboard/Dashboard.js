import React from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const Dashboard = () => {
  return (
    <div>
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
  );
};

export default Dashboard;
