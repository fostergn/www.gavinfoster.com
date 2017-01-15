import { connect } from 'react-redux';
import { toggleChat, isDrawing, toggleDrawing } from '../../actions/actions';
import ChatIcon from './ChatIcon';

const mapStateToProps = (state) => {
  return {
    isChatOpen: state.chat.isChatOpen,
    isDrawing: state.portfolio.isDrawing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChat: () => {
      dispatch(toggleChat());
    },
    toggleDrawing: () => {
      dispatch(toggleDrawing());
    },
  };
};

const ChatIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatIcon);

export default ChatIconContainer;
