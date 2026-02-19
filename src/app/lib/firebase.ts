import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCCViNCBLpWkvMfgEZTIiS84UedZrm5MMQ',
  authDomain: 'travelandthrills-22cfe.firebaseapp.com',
  projectId: 'travelandthrills-22cfe',
  storageBucket: 'travelandthrills-22cfe.firebasestorage.app',
  messagingSenderId: '288600705309',
  appId: '1:288600705309:web:f4a3cf6398f3ee02b3f9f4',
  measurementId: 'G-7SKZWVZNLH'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
