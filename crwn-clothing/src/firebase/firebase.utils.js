import firebase from 'firebase/app';
// For the database
import 'firebase/firestore';
// For the auth
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8FB_gOePiUsrAgU5oXhyj5R7zeqmiDtY",
  authDomain: "crwn-clothing-60481.firebaseapp.com",
  databaseURL: "https://crwn-clothing-60481.firebaseio.com",
  projectId: "crwn-clothing-60481",
  storageBucket: "",
  messagingSenderId: "839834938162",
  appId: "1:839834938162:web:cd0128147d31d09f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    console.log(userAuth);
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.messge);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;