import { initializeApp } from "firebase/app";
import { 
  getAuth,
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC04r_GKEO3zQcgNA3nDns5kPAtuVldkg0",
  authDomain: "brightstream-a6efd.firebaseapp.com",
  projectId: "brightstream-a6efd",
  storageBucket: "brightstream-a6efd.appspot.com",
  messagingSenderId: "344229386108",
  appId: "1:344229386108:web:bc1a6c710b7d7df59e36f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};