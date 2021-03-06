import React, { Component } from 'react';
import classNames from 'classnames';
import ChatForm from './ChatForm';
import GavinImage from '../../images/gavin.jpg';
import ChatMessagesList from './ChatMessagesList';

class ChatWindow extends Component {
  constructor(props){
    super(props)
  }

  closeMobileChatWindow(){
    document.body.classList.remove('body--chat-open');
    this.props.toggleChat();
  }

  render(){
    const { adminIsTyping, isChatOpen, sendMessage, messages, toggleDrawing, toggleChat, isDrawing, updateIsTyping } = this.props;

    return (
      <div id='chat__window--mobile' className={`chat__window ${!isChatOpen ? 'hidden' : ''}`}>
        <header className="chat-header">
          <div className="chat-header__image-container">
            <img className="chat-header__image" src={GavinImage}/>
          </div>
          <div className="chat-header__title-container">
            <h2 className="chat-header__title">Portfolio Support</h2>
            <p className="chat-header__status">is online</p>
          </div>
          <div className="chat-header__mobile-close" onClick={() => this.closeMobileChatWindow()}>close</div>
        </header>
        <ChatMessagesList adminIsTyping={adminIsTyping} messages={messages} />
        <ChatForm sendMessage={sendMessage} toggleDrawing={toggleDrawing} isDrawing={isDrawing} updateIsTyping={updateIsTyping} />
      </div>
    );
  }
}

export default ChatWindow;
