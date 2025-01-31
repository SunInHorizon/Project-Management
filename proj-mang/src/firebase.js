// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNB-pq4NU8YyioHOeWHeFlMkFhNCOMPUI",
  authDomain: "project-management-aa94e.firebaseapp.com",
  projectId: "project-management-aa94e",
  storageBucket: "project-management-aa94e.firebasestorage.app",
  messagingSenderId: "798875103447",
  appId: "1:798875103447:web:7a2150403debb816c44092",
  measurementId: "G-FM2W4TFC3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default {db, auth};
