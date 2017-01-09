import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCOj3piZf-HrV-WjDy30WlY_F7rCLqCIAk",
  authDomain: "portfoliochat-c02b2.firebaseapp.com",
  databaseURL: "https://portfoliochat-c02b2.firebaseio.com",
  storageBucket: "portfoliochat-c02b2.appspot.com",
  messagingSenderId: "500384902525"
};

firebase.initializeApp(config);

export default firebase;
