// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfqzsSGuSepu0e4O1x8eXRjqPasqK-j5w",
  authDomain: "todolist-bda46.firebaseapp.com",
  projectId: "todolist-bda46",
  storageBucket: "todolist-bda46.firebasestorage.app",
  messagingSenderId: "754607185374",
  appId: "1:754607185374:web:9a1fe962e692a949ab914f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, 'messages');

export { db, colRef, addDoc, Timestamp, onSnapshot, query, where, orderBy}