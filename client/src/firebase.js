// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-920cf.firebaseapp.com",
  projectId: "mern-estate-920cf",
  storageBucket: "mern-estate-920cf.appspot.com",
  messagingSenderId: "427398761886",
  appId: "1:427398761886:web:03c1bf98ccadbe2bfd5a8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);