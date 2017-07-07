import { connect } from 'react-redux';
import Home from './Home';

import { setImageLoaded } from './duck';

const mapStateToProps = state => ({
  imagesLoaded: state.splash.imagesLoaded
});

const HomeContainer = connect(mapStateToProps, { setImageLoaded })(Home);
export default HomeContainer;
