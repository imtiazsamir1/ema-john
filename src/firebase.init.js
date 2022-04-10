// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG22F9J6KuLgb-8rTfdzlCJkrUGNP9aW8",
  authDomain: "ema-john-simple-82f55.firebaseapp.com",
  projectId: "ema-john-simple-82f55",
  storageBucket: "ema-john-simple-82f55.appspot.com",
  messagingSenderId: "17524927538",
  appId: "1:17524927538:web:48e42bad40e39eb73fa02b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
