// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBleDd3kyY1UlAI8XN3yC9YpoAhVxPsFuU",
  authDomain: "prova-react-auth.firebaseapp.com",
  projectId: "prova-react-auth",
  storageBucket: "prova-react-auth.appspot.com",
  messagingSenderId: "883324655732",
  appId: "1:883324655732:web:a05218ecf3360a71971921"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();