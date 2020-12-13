import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAUCxoEDDk65qGGur9tiqSXRtWld6DP1qk",
  authDomain: "emojigamble.firebaseapp.com",
  databaseURL: "https://emojigamble.firebaseio.com",
  projectId: "emojigamble",
  storageBucket: "emojigamble.appspot.com",
  messagingSenderId: "912161630768",
  appId: "1:912161630768:web:0df90c4df9f9169d8c5bf5",
};
firebase.initializeApp(config);
export default firebase;

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

function GoogleSignIn() {
  auth
    .signInWithPopup(googleAuthProvider)
    .then((result) => {
      console.log(result);
    });
}

function AnonymousSignIn() {
  auth
    .signInAnonymously()
    .then((result) => {
      console.log(result);
    });
}

function SignOut() {
  auth.signOut().then(() => {
    window.location.reload();
  });
}

export {googleAuthProvider, auth, GoogleSignIn, AnonymousSignIn, SignOut}
