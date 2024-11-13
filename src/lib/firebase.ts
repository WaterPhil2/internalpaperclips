import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYm3RVxxrJD4aehu4z5UCbT01LAMWHDl8",
  authDomain: "internal-paperclip.firebaseapp.com",
  projectId: "internal-paperclip",
  storageBucket: "internal-paperclip.firebasestorage.app",
  messagingSenderId: "769824944745",
  appId: "1:769824944745:web:3dc3b9c6468131dad9e8f8",
  measurementId: "G-QNZKGF235L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support offline persistence.');
  }
});