// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSf_7fCW57-Mfi0d5uHBHsxtERyQkB5fU",
  authDomain: "taskbuddy-d121c.firebaseapp.com",
  projectId: "taskbuddy-d121c",
  storageBucket: "taskbuddy-d121c.firebasestorage.app",
  messagingSenderId: "966974947414",
  appId: "1:966974947414:web:d7419d47328d423c5dbbf7",
  measurementId: "G-VYR1M3RZJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
