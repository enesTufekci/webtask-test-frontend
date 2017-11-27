import { connect } from 'react-redux';
import Home from './HomeComponent';
import { update } from './module/reducer';

const mapStateToProps = state => ({
  ...state.home,
});

const mapDispatchToProps = {
  update,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
