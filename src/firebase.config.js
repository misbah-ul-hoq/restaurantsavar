// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAJseo-ki6TgSMr_D-a69JfSOIQTf-ZSY",
  authDomain: "tastyfoods900.firebaseapp.com",
  projectId: "tastyfoods900",
  storageBucket: "tastyfoods900.appspot.com",
  messagingSenderId: "164979071654",
  appId: "1:164979071654:web:3871990ad3f914d970b267",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
