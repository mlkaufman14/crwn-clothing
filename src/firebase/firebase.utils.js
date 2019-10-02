import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVqAxgfOm8ABVeT4LvaBgSG31sd7_uJTY",
    authDomain: "crwn-db-55cf9.firebaseapp.com",
    databaseURL: "https://crwn-db-55cf9.firebaseio.com",
    projectId: "crwn-db-55cf9",
    storageBucket: "",
    messagingSenderId: "867164384952",
    appId: "1:867164384952:web:cda19e910c1d6f1eab0e4d",
    measurementId: "G-ZYH72RD3RW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;