import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDm5kQYgO3NN83m_GNFjdEqoeFnz74JBCw",
  authDomain: "app-25e82.firebaseapp.com",
  projectId: "app-25e82",
  storageBucket: "app-25e82.appspot.com",
  messagingSenderId: "514842062221",
  appId: "1:514842062221:web:800bf6f759f40a9cafe1c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
