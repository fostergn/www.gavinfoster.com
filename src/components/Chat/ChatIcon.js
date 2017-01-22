import React from 'react';

const ChatIcon = ({ isChatOpen, isDrawing, toggleChat, toggleDrawing }) =>  {

  function toggleChatAndDrawing(){
    // if mobile then toggle class to body
    const isMobile = window.matchMedia('(max-width: 700px)').matches;
    if(isMobile  && document.body.classList.contains('body--chat-open')){
      document.body.classList.remove('body--chat-open');
    } else if(isMobile) {
      // scroll up
      window.scrollTo(0,0);
      document.body.classList.add('body--chat-open');
    }
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
