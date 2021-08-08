// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

// };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD80tOGoktitLLB-zUdxGHDalbI4aL9ZFI',
  authDomain: 'todo-app-cp-c04dc.firebaseapp.com',
  projectId: 'todo-app-cp-c04dc',
  storageBucket: 'todo-app-cp-c04dc.appspot.com',
  messagingSenderId: '1022734978777',
  appId: '1:1022734978777:web:0396a86edd0b0a0bf238c8',
  measurementId: 'G-6GFC02SS4M',
});

const db = firebaseApp.firestore();

export default db;
