import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb4QT874JV0BUH5luNi8YS6k33fJ2s2i4",
  authDomain: "netflix-project-312ea.firebaseapp.com",
  projectId: "netflix-project-312ea",
  storageBucket: "netflix-project-312ea.appspot.com",
  messagingSenderId: "561153893302",
  appId: "1:561153893302:web:c829b33d38db4437cf1717",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
