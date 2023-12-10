import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyD7l4BnVM1DS5xLcw6kj8_vK5se-Ld6bMY",
  authDomain: "notes-app-fe4cf.firebaseapp.com",
  projectId: "notes-app-fe4cf",
  storageBucket: "notes-app-fe4cf.appspot.com",
  messagingSenderId: "1029260355981",
  appId: "1:1029260355981:web:8096851da649bab34235c4"
});

const FIREBASE = firebase;

export default FIREBASE;
