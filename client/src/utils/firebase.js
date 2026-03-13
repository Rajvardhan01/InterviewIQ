
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-eac4d.firebaseapp.com",
  projectId: "interviewiq-eac4d",
  storageBucket: "interviewiq-eac4d.firebasestorage.app",
  messagingSenderId: "748754376376",
  appId: "1:748754376376:web:05cf9b007b99796806c64d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}