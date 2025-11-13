// Firebase initialization and exports for Firestore/Storage
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDAFszxZeQ1Ky8IUes2uotbI8sF0YCAO-k",
  authDomain: "hsp-technologies.firebaseapp.com",
  projectId: "hsp-technologies",
  storageBucket: "hsp-technologies.firebasestorage.app",
  messagingSenderId: "1034197035439",
  appId: "1:1034197035439:web:5dbe26c580aa39c489a75a",
  measurementId: "G-1032QWQYQP"
};

// Guard against missing config in dev
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  // eslint-disable-next-line no-console
  console.warn('Firebase config is missing. Did you set .env.local?');
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { serverTimestamp };
