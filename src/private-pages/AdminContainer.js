import { connect } from 'react-redux';
import Admin from './Admin';

const mapStateToProps = state => ({
  isAuth: state.login.isAuth,
  isRequestingAuth: state.login.isRequestingAuth
});

const AdminContainer = connect(mapStateToProps, {})(Admin);
export default AdminContainer;
