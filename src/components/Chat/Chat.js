import React from 'react';
import classNames from 'classnames';
import ChatIcon from './ChatIconContainer';
import ChatWindow from './ChatWindowContainer';

const Chat = ({ isChatOpen }) =>  {

  const chatContainerClass = classNames({
    'chat__container': true,
    'chat__container--click-through': !isChatOpen
  });

  return (
    <div className={chatContainerClass}>
      <ChatWindow />
      <ChatIcon />
    </div>
  );
}

export default Chat;
