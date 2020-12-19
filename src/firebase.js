import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlGMO9F4U4nTZmNU0t1Bmf4VO4UUmnDs4",
  authDomain: "instagram-clone-98bff.firebaseapp.com",
  databaseURL: "https://instagram-clone-98bff-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-98bff",
  storageBucket: "instagram-clone-98bff.appspot.com",
  messagingSenderId: "761021684331",
  appId: "1:761021684331:web:a4f6a60eef98b48b9baf2e",
  measurementId: "G-LKPSK1BH7L",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db
