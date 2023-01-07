// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm3nqYJWX2t-SMtexGe534BiQKkY0qqV8",
  authDomain: "streamline-blog-44ebb.firebaseapp.com",
  projectId: "streamline-blog-44ebb",
  storageBucket: "streamline-blog-44ebb.appspot.com",
  messagingSenderId: "635529753993",
  appId: "1:635529753993:web:563f528de8f457033a1d58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

