import React from 'react';
import ChatExpandableText from './ChatExpandableText';

const ChatForm = ({ sendMessage }) =>  {

  function submitForm(){
    const textarea = document.getElementById('chat-form__textarea');
    sendMessage(textarea.innerText);
    textarea.innerHTML = '';
  }

  return (
    <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
      <ChatExpandableText sendMessage={sendMessage} />
      <div className="chat-form__submit" onClick={() => submitForm()}><i className="fa fa-paper-plane-o" aria-hidden="true"></i></div>
    </form>
  );
}

export default ChatForm;
