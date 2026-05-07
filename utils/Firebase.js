import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zappshop-e-commerce.firebaseapp.com",
  projectId: "zappshop-e-commerce",
  storageBucket: "zappshop-e-commerce.firebasestorage.app",
  messagingSenderId: "324397555123",
  appId: "1:324397555123:web:f7391287a5e90597517fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
