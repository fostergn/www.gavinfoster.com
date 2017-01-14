import React, { Component } from 'react';

class ChatMessagesList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.updateScrollPosition();
  }

  componentDidUpdate(){
    this.updateScrollPosition();
  }

  imageNewWindow(url){
    var win = window.open(url, '_blank');
    win.focus();
  }

  render(){
    let messages = this.props.messages.length > 0 ? this.props.messages : [{author:'intro', message: 'This chat is here to help you if you have any questions 🐸. Gavin is on the other end and eager to answer any questions.'}];
    this.messagesList = messages.map(
      (msg, index) => {
        if (msg.message.startsWith('data:')){
          return (<li key={index} className={`chat-message chat-message--image chat-message--${msg.author}`}><img onDoubleClick={() => this.imageNewWindow(msg.message)} src={msg.message} /></li>)
        }
        return (<li key={index} className={`chat-message chat-message--${msg.author}`}>{msg.message}</li>)
      }
    )

    return (
      <ul className="chat-message__messages">
        {this.messagesList}
      </ul>
    );
  }

  updateScrollPosition(){
    const scrollableList = document.getElementsByClassName('chat-message__messages');
    if(scrollableList[0]){
      scrollableList[0].scrollTop = scrollableList[0].scrollHeight + 30;
    }
  }
}

export default ChatMessagesList;
