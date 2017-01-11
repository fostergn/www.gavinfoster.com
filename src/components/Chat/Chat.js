import React from 'react';
import classNames from 'classnames';
import ChatIcon from './ChatIconContainer';
import ChatWindow from './ChatWindowContainer';

const Chat = () =>  {

  return (
    <div className="chat__container">
      <ChatWindow />
      <ChatIcon />
    </div>
  );
}

export default Chat;
