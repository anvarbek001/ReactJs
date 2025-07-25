/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfu9DsROpyn_VVf8jVtsEAAebNqDtGSf0",
  authDomain: "test-app-a2da3.firebaseapp.com",
  projectId: "test-app-a2da3",
  storageBucket: "test-app-a2da3.firebasestorage.app",
  messagingSenderId: "409610938339",
  appId: "1:409610938339:web:0b333655da17d59546e2d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
