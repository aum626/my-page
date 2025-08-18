// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3D2Wuv7EMfrUPptad8tLwNdgXcMXKoSs",
  authDomain: "hello-world-f6e67.firebaseapp.com",
  projectId: "hello-world-f6e67",
  storageBucket: "hello-world-f6e67.firebasestorage.app",
  messagingSenderId: "360090198361",
  appId: "1:360090198361:web:4726a79296a0fdd36eac48",
  measurementId: "G-X6E3TGNXFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);