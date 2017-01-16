import React from 'react';
import ChatExpandableText from './ChatExpandableText';

const ChatForm = ({ sendMessage, toggleDrawing }) =>  {

  function submitForm(){
    const textarea = document.getElementById('chat-form__textarea');
    sendMessage(textarea.innerText);
    textarea.innerHTML = '';
  }

  function attachImage(){
    var file    = document.getElementById('chat-form__file').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      sendMessage(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
      <ChatExpandableText sendMessage={sendMessage} />
      <div className="chat-form__draw" onClick={() => toggleDrawing()}><i className="fa fa-paint-brush" aria-hidden="true"></i></div>
      <div className="chat-form__attachment" onClick={() => attachImage()}><i className="fa fa-paperclip" aria-hidden="true"></i></div>
      <input className="chat-form__file" id="chat-form__file" onChange={() => attachImage()} type="file"></input>
      <div className="chat-form__submit" onClick={() => submitForm()}><i className="fa fa-paper-plane-o" aria-hidden="true"></i></div>
    </form>
  );
}

export default ChatForm;
