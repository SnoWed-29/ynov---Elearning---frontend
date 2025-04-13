
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP-0bQrovoZU7udNij-o8psVObTu1TI-4",
  authDomain: "devsoutnance.firebaseapp.com",
  projectId: "devsoutnance",
  storageBucket: "devsoutnance.firebasestorage.app",
  messagingSenderId: "995031168193",
  appId: "1:995031168193:web:16fd0248a23d71f5da5040"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };