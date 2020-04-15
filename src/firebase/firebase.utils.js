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

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snap= await userRef.get();
    console.log(snap)

    if(!snap.exists){
      const {displayName,email}=userAuth;
      const createDate=new Date();

      try{
          await userRef.set({
            displayName,
            email,
            createDate,
            ...additionalData

          })
      }catch(error)
      {
          console.log(error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;