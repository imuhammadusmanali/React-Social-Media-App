// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6BV97AhAFjF592iVxCtVDivXXkC6UG5k',
  authDomain: 'social-media-app-d1a39.firebaseapp.com',
  projectId: 'social-media-app-d1a39',
  storageBucket: 'social-media-app-d1a39.appspot.com',
  messagingSenderId: '607712132887',
  appId: '1:607712132887:web:14faadd8b4c52ba0a30152',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
