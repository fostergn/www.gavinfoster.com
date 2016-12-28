import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Footer from './Footer';

const mapStateToProps = (state) => {
  return {
    view: state.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;
