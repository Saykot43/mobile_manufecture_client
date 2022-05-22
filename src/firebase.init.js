// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6azIJGdE4rebNAHjhM-yzNkO9dBkaHw0",
    authDomain: "mobile-86fbe.firebaseapp.com",
    projectId: "mobile-86fbe",
    storageBucket: "mobile-86fbe.appspot.com",
    messagingSenderId: "1034327756502",
    appId: "1:1034327756502:web:174c3b124b0bfc45a98377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;