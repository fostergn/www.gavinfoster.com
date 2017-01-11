import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    isChatOpen: state.chat.isChatOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
