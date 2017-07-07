import { connect } from 'react-redux';
import Login from './Login';

import { login, throwErr, rmErr } from './duck';

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  hasError: state.login.hasError
});

const LoginContainer = connect(mapStateToProps, { login, throwErr, rmErr })(
  Login
);
export default LoginContainer;
