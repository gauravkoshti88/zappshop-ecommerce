import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "logine-commerce-41c26.firebaseapp.com",
  projectId: "logine-commerce-41c26",
  storageBucket: "logine-commerce-41c26.firebasestorage.app",
  messagingSenderId: "588950898590",
  appId: "1:588950898590:web:70cdde490a1a1f4a88b88f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
