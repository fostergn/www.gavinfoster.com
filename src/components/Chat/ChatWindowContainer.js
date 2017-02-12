import { connect } from 'react-redux';
import { sendMessage, toggleDrawing, toggleChat, updateIsTyping } from '../../actions/actions';
import ChatWindow from './ChatWindow';

const mapStateToProps = (state) => {
  return {
    isChatOpen: state.chat.isChatOpen,
    isDrawing: state.portfolio.isDrawing,
    messages: state.chat.conversation.messages,
    adminIsTyping: state.chat.conversation.isTyping,
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
    updateIsTyping: typing => {
      dispatch(updateIsTyping(typing));
    },
  };
};

const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);

export default ChatWindowContainer;
