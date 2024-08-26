// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgPKN0J9pWJvQ3W4WkSJX4cWJXifCC_g4",
  authDomain: "mindfulness-721be.firebaseapp.com",
  projectId: "mindfulness-721be",
  storageBucket: "mindfulness-721be.appspot.com",
  messagingSenderId: "163632421381",
  appId: "1:163632421381:web:d3d4c6a9639c852cb8da6c",
  measurementId: "G-XFW86LR3T2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
