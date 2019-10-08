import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('2wCxCZGsTIugZirrrMfe').collection('cartItems').doc('PkkFkcyyaqOmkqSsvOsV');
firestore.doc('/users/2wCxCZGsTIugZirrrMfe/cartItems/PkkFkcyyaqOmkqSsvOsV');
firestore.collection('/users/2wCxCZGsTIugZirrrMfe/cartItems');