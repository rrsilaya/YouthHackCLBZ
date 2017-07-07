import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const PageContainer = () => {
  return (
    <div className="uk-margin-large-top page-container uk-box-shadow-small white-container">
      lkjlkjlkj
      <Switch>
        <Route exact path="/events" />
        <Route exact path="/milestones" />
        <Route exact path="/about" />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PageContainer;
