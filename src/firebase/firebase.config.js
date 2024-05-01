// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgLXzwva0Vv3SNKrI85kprv2ydjRpIhaU",
  authDomain: "qk-hall.firebaseapp.com",
  projectId: "qk-hall",
  storageBucket: "qk-hall.appspot.com",
  messagingSenderId: "518902274422",
  appId: "1:518902274422:web:dc871f8f90548cd384c257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;