import React from 'react';

const ChatIcon = ({ isChatOpen, toggleChat }) =>  {


  return (
    <div className="chat__icon" onClick={() => toggleChat()}>
      <div className={`chat__icon-button chat__icon-button--closed ${!isChatOpen ? 'hidden' : ''}`}>
        X
      </div>
      <div className={`chat__icon-button chat__icon-button--open ${isChatOpen ? 'hidden' : ''}`}>
        <i className="fa fa-globe" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default ChatIcon;
