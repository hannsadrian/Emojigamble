import firebase from "firebase";
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
