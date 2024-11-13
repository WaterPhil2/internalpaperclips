import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYm3RVxxrJD4aehu4z5UCbT01LAMWHDl8",
  authDomain: "internal-paperclip.firebaseapp.com",
  projectId: "internal-paperclip",
  storageBucket: "internal-paperclip.firebasestorage.app",
  messagingSenderId: "769824944745",
  appId: "1:769824944745:web:3dc3b9c6468131dad9e8f8",
  measurementId: "G-QNZKGF235L"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);