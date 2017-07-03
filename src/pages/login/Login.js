import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { ScaleLoader } from 'halogen';

class Login extends Component {
  handleFormSubmit = e => {
    e.preventDefault();

    if (e.target.password.value) {
      this.props.login(e.target.password.value);
    } else {
      this.props.throwErr();
      setTimeout(() => {
        this.props.rmErr();
      }, 800);
    }

    e.target.reset();
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
              {this.props.isLoading
                ? <div className="uk-width-1-1 uk-text-center">
                    <ScaleLoader color="#182d48" />
                  </div>
                : ''}
              <div className="uk-width-2-3@m uk-width-1-1@s">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: lock" />
                  <input
                    type="password"
                    name="password"
                    className={
                      'uk-input' +
                      (this.props.hasError
                        ? ' uk-form-danger uk-animation-shake'
                        : '')
                    }
                  />
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
