import firebase from 'firebase/app';
import { auth } from '../firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const googleAuth = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    // eslint-disable-next-line no-unused-vars
    const user = res.user;

    // TODO: Handle the database queries later on..
    // const query = await db.collection('users').where('uid', '==', user.uid).get();
    // if (query.docs.length === 0) {
    //   await db.collection('users').add({
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: 'google',
    //     email: user.email,
    //   });
    // }
  } catch (err) {
    console.error(err);
  }
};

export default googleAuth;
