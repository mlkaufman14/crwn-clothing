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

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;