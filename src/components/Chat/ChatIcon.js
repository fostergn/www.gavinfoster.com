import React from 'react';

const ChatIcon = ({ isChatOpen, isDrawing, toggleChat, toggleDrawing }) =>  {

  function toggleChatAndDrawing(){
    toggleChat();
    if(isDrawing){
      toggleDrawing();
    }
  }

  return (
    <div className={`chat__icon chat__icon--${!isChatOpen ? 'closed' : ''}`} onClick={() => toggleChatAndDrawing()}>
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
