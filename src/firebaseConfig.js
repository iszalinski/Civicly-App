// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQEoWuQx5QY725pOxH_7GEnW1Q5bZCfs",
  authDomain: "civicly-feb9b.firebaseapp.com",
  projectId: "civicly-feb9b",
  storageBucket: "civicly-feb9b.appspot.com",
  messagingSenderId: "601962098404",
  appId: "1:601962098404:web:166cc61590fdb5ce1086f1",
  measurementId: "G-B4P5WGGK0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = (getStorage(app));
const analytics = getAnalytics(app);

export default storage;

