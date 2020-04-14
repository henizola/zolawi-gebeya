import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


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

  export const auth=firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;