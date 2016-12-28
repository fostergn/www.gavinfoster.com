import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Header from './Header';

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

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
