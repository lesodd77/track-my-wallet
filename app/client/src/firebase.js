import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi2Zarua3d1Lh5NsvnAC10-UWQKpqAfqk",
  authDomain: "wallet-tracker-c58d6.firebaseapp.com",
  projectId: "wallet-tracker-c58d6",
  storageBucket: "wallet-tracker-c58d6.appspot.com",
  messagingSenderId: "1811765023",
  appId: "1:1811765023:web:e42582fc032638b1d4c22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;