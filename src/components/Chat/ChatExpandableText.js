import React, { Component } from 'react';

class ChatExpandableForm extends Component {

  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.sendMessage = this.props.sendMessage;
    this.updateIsTyping = this.props.updateIsTyping.bind(this);
    this.isTypingTimeout;
  }

  submitTextInput(value){
    if(value === ''){return}
    this.sendMessage(value);
  }

  makeExpandingArea(container) {
   var span = container.querySelector('span');
   var area = container.querySelector('div');
     area.addEventListener('input', function() {
       span.textContent = area.innerText + 'do';
     }, false);
  // Enable extra CSS
    container.className += " active";
  }

  componentDidMount(){
    var areas = document.querySelectorAll('.chat-form__input');
    var l = areas.length;
    while (l--) {
     this.makeExpandingArea(areas[l]);
    }
  }

  handleKeyPress() {
    var debounceTime = 1500;
    var updateIsTyping = this.updateIsTyping;
    var input = document.getElementById('chat-form__textarea');

    updateIsTyping(true);
    if (this.isTypingTimeout !== undefined) {
      clearTimeout(this.isTypingTimeout);
    }
    this.isTypingTimeout = setTimeout(function() {
      updateIsTyping(false);
    }, debounceTime);
  }

  handleTyping(e) {
    const keyCode = e.keyCode;
    if (keyCode == 13 && e.shiftKey) {
    } else if (keyCode == 13) {
      const inputElement = document.getElementById('chat-form__textarea');
      this.submitTextInput(inputElement.innerText);
      inputElement.innerHTML = '';
      document.getElementsByClassName('chat-form__span')[0].innerHTML = '';
      e.preventDefault();
    }
  }

  render(){
    return (
        <div className="chat-form__input">
          <pre><span className="chat-form__span"></span><br /></pre>
          <div
            contentEditable
            id="chat-form__textarea"
            placeholder="Message Gavin"
            onKeyDown={(e) => this.handleTyping(e)}
            onKeyPress={() => this.handleKeyPress()}
            >
          </div>
        </div>
    );
  }
}

export default ChatExpandableForm;
