// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBohdd8-jM9o1RmBBbl8zFK-vxUsCvgTsE",
    authDomain: "shop-react-94e7b.firebaseapp.com",
    projectId: "shop-react-94e7b",
    storageBucket: "shop-react-94e7b.appspot.com",
    messagingSenderId: "1080322899557",
    appId: "1:1080322899557:web:6d1c528f6e090452bad08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);