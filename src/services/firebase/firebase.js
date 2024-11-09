// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEBula5d39uA2tEcZCbJ8tyPvpyK7kIoY",
  authDomain: "game-94a61.firebaseapp.com",
  projectId: "game-94a61",
  storageBucket: "game-94a61.firebasestorage.app",
  messagingSenderId: "47900837055",
  appId: "1:47900837055:web:e9f0eb733f0b6036a8b20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db}