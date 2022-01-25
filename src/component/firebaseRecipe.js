// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/firestore";
require("firebase/auth");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC9j24Lo-6BoI56ubYhZu5tdOdmK83JHDQ",
  authDomain: "recipe-finder-193e4.firebaseapp.com",
  projectId: "recipe-finder-193e4",
  storageBucket: "recipe-finder-193e4.appspot.com",
  messagingSenderId: "970790999135",
  appId: "1:970790999135:web:b8edd047f1178dfd3077ea",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
