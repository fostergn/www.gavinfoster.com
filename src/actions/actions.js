import projects from '../projects';
import firebaseDb, { conversationId } from '../firebaseDb';


// Portfolio Constants

export const MOVE_DOTS = 'MOVE_DOTS';
export const UN_HOVER = 'UN_HOVER';
export const INIT_PROJECT = 'INIT_PROJECT';

// Chat Constants

export const TOGGLE_CHAT = 'TOGGLE_CHAT';
export const TOGGLE_DRAWING = 'TOGGLE_DRAWING';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
export const ADD_MESSAGE_TO_FIREBASE = 'ADD_MESSAGE_TO_FIREBASE';
export const ADD_MESSAGE_TO_CONVERSATION = 'ADD_MESSAGE_TO_CONVERSATION';
const UPDATE_TYPING = 'UPDATE_TYPING';

// Portfolio Actions

export function moveDots(position, name) {
    return {
        type: MOVE_DOTS,
        position,        // index of dot hovered over
        project: projects[projects.findIndex(project => project.name === name)]
    }
}

export function toggleDrawing() {
    return {
        type: TOGGLE_DRAWING,
    }
}

export function initProject(name) {
    return {
        type: INIT_PROJECT,
        project: projects[projects.findIndex(project => project.name === name)]
    }
}

export function unHover() {
    return {
        type: UN_HOVER,
    }
}

/*
* Chat Actions
*/

export function toggleChat() {
    return {
        type: TOGGLE_CHAT,
    }
}

export function updateConversation(conversation){
  return {
    type: UPDATE_CONVERSATION,
    conversation: conversation,
  }
}

export function addMessageToConversation(message){
  return {
    type: ADD_MESSAGE_TO_CONVERSATION,
    message,
  }
}

export function updateIsTyping(typing){
    firebaseDb.ref(`conversations/${conversationId}`).update({
        clientIsTyping: typing
    });
    return {
        type: UPDATE_TYPING,
    }
}



export function sendMessage(message) {
    // send message to firebase
    firebaseDb.ref('messages').push({
      author: 'client',
      message,
      conversationId,
      createdOn: Date.now(),
    }, function(){
      console.log('success');
    });
    firebaseDb.ref(`conversations/${conversationId}`).update({
      lastChat: Date.now(),
    });
    return {
        type: ADD_MESSAGE_TO_FIREBASE,
    }
}
