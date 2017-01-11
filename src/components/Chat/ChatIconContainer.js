import { connect } from 'react-redux';
import { toggleChat } from '../../actions/actions';
import ChatIcon from './ChatIcon';

const mapStateToProps = (state) => {
  return {
    isChatOpen: state.chat.isChatOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChat: () => {
      dispatch(toggleChat());
    },
  };
};

const ChatIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatIcon);

export default ChatIconContainer;
