import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyDgcun5uuxaqbVhs4mdZQmf-tA9E78QKGw",
  authDomain: "zolawi-gebeya.firebaseapp.com",
  databaseURL: "https://zolawi-gebeya.firebaseio.com",
  projectId: "zolawi-gebeya",
  storageBucket: "zolawi-gebeya.appspot.com",
  messagingSenderId: "423565300945",
  appId: "1:423565300945:web:3d7331117eaa08923a61f0",
  measurementId: "G-MDCR2SH6N3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
