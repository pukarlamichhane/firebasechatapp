import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAqX7L7U_b2x2Xp0Ac9ushKud7xA0cp2I",
  authDomain: "chatapp-3965f.firebaseapp.com",
  projectId: "chatapp-3965f",
  storageBucket: "chatapp-3965f.appspot.com",
  messagingSenderId: "536078270070",
  appId: "1:536078270070:web:8741a0eeaf39b537abe957",
  measurementId: "G-VVEN8HJ22F"
};


export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage();
export const db = getFirestore()
