import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDiZNDlmLA0L_zWaqASQiMUxZJQaQN9Q2w",
  authDomain: "chisendweb001.firebaseapp.com",
  databaseURL: "https://chisendweb001-default-rtdb.firebaseio.com",
  projectId: "chisendweb001",
  storageBucket: "chisendweb001.appspot.com",
  messagingSenderId: "40157019633",
  appId: "1:40157019633:web:0c263468cf7fc9a59dd850",
  measurementId: "G-4C4F274PCG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);


export { db };