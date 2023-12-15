import firebase from "firebase/compat/app";
import { GoogleAuthProvider, signOut, getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyYi110ghIdOl6KMCHZKiuJm3yGfQUSYw",
  authDomain: "seguranca-da-informacao-30b8b.firebaseapp.com",
  projectId: "seguranca-da-informacao-30b8b",
  storageBucket: "seguranca-da-informacao-30b8b.appspot.com",
  messagingSenderId: "912819964766",
  appId: "1:912819964766:web:2861e4e6d66f2057f29dcf",
  measurementId: "G-QT6SDKTJH1"
};
// const firebaseConfig = {
//     apiKey: 'AIzaSyAyYi110ghIdOl6KMCHZKiuJm3yGfQUSYw',
//     authDomain: 'localhost:9099', // Use the Auth Emulator's host and port
//     projectId: 'seguranca-da-informacao-30b8b',
//   };

firebase.initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});


export const auth = getAuth();
export const auth2 = firebase.auth()
// signInWithRedirect(auth, provider);


// export const app = firebase.initializeApp(firebaseConfig);

