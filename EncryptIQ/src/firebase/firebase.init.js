// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBslOtUks7vdIO3Lr3svlKeDtmH3e7HWQQ",
  authDomain: "encryptiq.firebaseapp.com",
  projectId: "encryptiq",
  storageBucket: "encryptiq.firebasestorage.app",
  messagingSenderId: "176095987772",
  appId: "1:176095987772:web:1cbfa008eaa6d027d1db39",
  measurementId: "G-DECFNF1BC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);