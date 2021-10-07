import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4bT06vyvFaSkbZL3PDQ0GIxGr36BILac',
  authDomain: 'nexusar-website.firebaseapp.com',
  projectId: 'nexusar-website',
  storageBucket: 'nexusar-website.appspot.com',
  messagingSenderId: '712034695164',
  appId: '1:712034695164:web:e4dae9382daf5c35bfa479',
  measurementId: 'G-JB5Z1T21VH',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { app, auth, db, storage };
