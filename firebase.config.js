// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Dnx3yiEyNk7XK4FTVySa75rlB_7QW3k",
  authDomain: "api-vuong.firebaseapp.com",
  projectId: "api-vuong",
  storageBucket: "api-vuong.appspot.com",
  messagingSenderId: "794914273489",
  appId: "1:794914273489:web:3ada55acb68267560cadf0",
  measurementId: "G-E7KFSDT6M4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export  {db};
const analytics = getAnalytics(app);