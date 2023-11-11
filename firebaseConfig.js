import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
 import { Auth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBVShXp6I6PP2qCioGUQlT-fyV-RKjAeNI",
    authDomain: "gurjao-conect.firebaseapp.com",
    databaseURL: "https://gurjao-conect-default-rtdb.firebaseio.com",
    projectId: "gurjao-conect",
    storageBucket: "gurjao-conect.appspot.com",
    messagingSenderId: "693662784767",
    appId: "1:693662784767:web:41672ca269d2d3abd6c0ca",
    measurementId: "G-3XKNCW43EZ"
};

const app = initializeApp(firebaseConfig);
