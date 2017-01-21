import { connect } from 'react-redux';
import { sendMessage, toggleDrawing, toggleChat } from '../../actions/actions';
import ChatWindow from './ChatWindow';

const mapStateToProps = (state) => {
  console.log('is chat open: ', state.chat.isChatOpen);
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
    toggleDrawing: msg => {
      dispatch(toggleDrawing(msg));
    },
    toggleChat: () => {
      dispatch(toggleChat());
    },
  };
};

const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);

export default ChatWindowContainer;
