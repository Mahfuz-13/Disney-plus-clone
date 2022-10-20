import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4XEPfYeDxX58eo0nz2LiX-emXz2IzhU4",
  authDomain: "disneyplus-clone-101.firebaseapp.com",
  projectId: "disneyplus-clone-101",
  storageBucket: "disneyplus-clone-101.appspot.com",
  messagingSenderId: "100726872672",
  appId: "1:100726872672:web:1b1b06f816405ae128c105",
  measurementId: "G-MY2X9W1ES6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
