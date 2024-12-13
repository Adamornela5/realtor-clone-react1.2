// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZrqsEVG_Q40PU3mr5-oUmfhjyllSnwWs",
  authDomain: "react-realtor-clone-117fe.firebaseapp.com",
  projectId: "react-realtor-clone-117fe",
  storageBucket: "react-realtor-clone-117fe.appspot.com",
  messagingSenderId: "815146036459",
  appId: "1:815146036459:web:1c9d53160011a5ef5f22ae",
  measurementId: "G-7XHJBHD0EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();