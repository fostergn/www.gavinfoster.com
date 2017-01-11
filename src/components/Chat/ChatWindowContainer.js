import { connect } from 'react-redux';
import { sendMessage } from '../../actions/actions';
import ChatWindow from './ChatWindow';

const mapStateToProps = (state) => {
  return {
    isChatOpen: state.chat.isChatOpen,
    messages: state.chat.conversation.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (msg) => {
      dispatch(sendMessage(msg));
    },
  };
};

const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);

export default ChatWindowContainer;
