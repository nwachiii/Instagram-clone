import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQguwZrZIvmbQXSm2L_3oqaJGgn8w96pw",
  authDomain: "instagram-clone-react-93fb4.firebaseapp.com",
  projectId: "instagram-clone-react-93fb4",
  storageBucket: "instagram-clone-react-93fb4.appspot.com",
  messagingSenderId: "253223728453",
  appId: "1:253223728453:web:8a2c952fddd886dd50ba2c",
  measurementId: "G-F9SERP2FPQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db
