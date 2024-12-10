// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7akgSxGQzHHKcJc5xca9__uOW1wfn3bI",
  authDomain: "sportpal-baa81.firebaseapp.com",
  projectId: "sportpal-baa81",
  storageBucket: "sportpal-baa81.firebasestorage.app",
  messagingSenderId: "667600419852",
  appId: "1:667600419852:web:65a6e8f2f53a1731b0c229",
  measurementId: "G-7BXF9BTLJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
