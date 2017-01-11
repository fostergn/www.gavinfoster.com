import React from 'react';
import ChatForm from './ChatForm';
import GavinImage from '../../images/gavin.jpg';
import ChatMessagesList from './ChatMessagesList';

const ChatWindow = ({ isChatOpen, sendMessage, messages }) =>  {

  return (
    <div className={`chat__window ${!isChatOpen ? 'hidden' : ''}`}>
      <header className="chat-header">
        <div className="chat-header__image-container">
          <img className="chat-header__image" src={GavinImage}/>
        </div>
        <div className="chat-header__title-container">
          <h2 className="chat-header__title">Portfolio Support</h2>
          <p className="chat-header__status">is online</p>
        </div>
      </header>
      <ChatMessagesList messages={messages} />
      <ChatForm sendMessage={sendMessage} />
    </div>
  );
}

export default ChatWindow;
