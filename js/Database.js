import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs ,getDoc,doc,updateDoc} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js';

import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlcPR5T50Ah9ukQHYwvlx131gntVhhMWg",
  authDomain: "student-info-27891.firebaseapp.com",
  databaseURL: "https://student-info-27891-default-rtdb.firebaseio.com",
  projectId: "student-info-27891",
  storageBucket: "student-info-27891.firebasestorage.app",
  messagingSenderId: "524307939129",
  appId: "1:524307939129:web:fa785188933af06a7432e8",
  measurementId: "G-N1B4MGXCGZ"
};

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);  // Ensure `app` is initialized first
    const auth = getAuth(app);
    export { auth, onAuthStateChanged, db,signInWithEmailAndPassword ,createUserWithEmailAndPassword,ref, set, push, get, child};
    export { collection, addDoc, getDocs, getDoc,doc, updateDoc };
