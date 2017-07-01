import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import UIkit from 'uikit';

class Login extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.password.value);
    e.target.reset();

    UIkit.notification('Logging in...');
  };

  render() {
    return (
      <DocumentTitle title="YHCLBZ / Login">
        <div className="full">
          <div className="middlewrapper uk-margin-medium-left uk-margin-medium-right uk-flex uk-flex-center uk-flex-middle">
            <form
              className="uk-grid uk-grid-small"
              onSubmit={this.handleFormSubmit}
              data-uk-grid>
              <div className="uk-width-2-3@m uk-width-1-1@s">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: lock" />
                  <input type="password" name="password" className="uk-input" />
                </div>
              </div>

              <div className="uk-width-1-3@m uk-width-1-1@s">
                <button
                  className="uk-button uk-button-primary uk-width-1-1"
                  type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Login;
