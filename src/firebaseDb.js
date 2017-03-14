import firebase from 'firebase';
import { store } from './index';
import { addMessageToConversation, updateConversation } from './actions/actions';
var Chance = require('chance'),
    chance = new Chance();

const config = {
  apiKey: "AIzaSyCOj3piZf-HrV-WjDy30WlY_F7rCLqCIAk",
  authDomain: "portfoliochat-c02b2.firebaseapp.com",
  databaseURL: "https://portfoliochat-c02b2.firebaseio.com",
  storageBucket: "portfoliochat-c02b2.appspot.com",
  messagingSenderId: "500384902525"
};

let initMessageCount = 10;
let firstMessageLoaded = false;

firebase.initializeApp(config);
const db = firebase.database();

export let conversationId = getUserId();
connectDb(conversationId);

function connectDb(conversationId){
  var convoRef = db.ref('conversations/'+conversationId);
  convoRef.update({
    isConnected: true
  })
  convoRef.onDisconnect().update({
    isConnected: false
  })

  // add conversation
   db.ref(`conversations/${conversationId}`)
     .on('value', function(data) {
       const isConnected = data.val().isConnected;
       const isTyping = data.val().adminIsTyping;
       const lastChat = data.val().lastChat;
       const adminIsTyping = data.val().adminIsTyping;
       const conversationId = data.val().conversationId;
       const newConversation = {
         conversationId,
         isTyping,
         isConnected,
         lastChat,
         adminIsTyping,
       };
       store.dispatch(updateConversation(newConversation));
     })

  // add messages to conversation
  db.ref('messages')
    .orderByChild('conversationId')
    .equalTo(conversationId)
    .on('child_added', function(data) {
      //  console.log('new message from convo: ', data.val());
       store.dispatch(addMessageToConversation(data.val()));
     });
}

function getUserId(){
  let gavinPortfolioUser = '';
  // get and or set user
  try {
    if(localStorage.gavinPortfolioUser){
      gavinPortfolioUser = localStorage.gavinPortfolioUser;
      db.ref('conversations/' + gavinPortfolioUser).update({
        conversationId: gavinPortfolioUser,
      });
    } else {
      gavinPortfolioUser = uid();
      localStorage.gavinPortfolioUser = gavinPortfolioUser;
      db.ref('conversations/' + gavinPortfolioUser).update({
        conversationId: gavinPortfolioUser,
        createdOn: Date.now(),
        name: chance.name(),
        identity: Math.floor(Math.random() * 12) + 1 // random int for identity (1-12) 
      });
    }
  }
  catch(e) {
    console.log('local storage not given permission: ', e);
  }
  return gavinPortfolioUser;
}

function uid(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}


export default db;
