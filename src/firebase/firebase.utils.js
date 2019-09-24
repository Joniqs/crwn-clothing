import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBkNtpBVDoSCb29k-VFp2F1K7KO4_wdm9Y",
  authDomain: "crwn-db-92a3e.firebaseapp.com",
  databaseURL: "https://crwn-db-92a3e.firebaseio.com",
  projectId: "crwn-db-92a3e",
  storageBucket: "",
  messagingSenderId: "389111068649",
  appId: "1:389111068649:web:13ba6df46005b3e42cbd78"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


