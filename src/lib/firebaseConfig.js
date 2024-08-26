// lib/firebaseConfig.js
import { initializeApp } from 'firebase/app';

// Tambahkan konfigurasi Firebase Anda di sini
const firebaseConfig = {
  apiKey: 'AIzaSyCsllKgO-s02WCAWyGS0BPb7bcmHU233oY',
  authDomain: 'personal-portofolio-eab38.firebaseapp.com',
  projectId: 'personal-portofolio-eab38',
  storageBucket: 'personal-portofolio-eab38.appspot.com',
  messagingSenderId: '395989328095',
  appId: '1:395989328095:web:fec7639365e1a2a0e8c96a',
  measurementId: 'G-HP5FJJBKTZ',
};

// // Inisialisasi Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };

const firebaseSDK = initializeApp(firebaseConfig);
export default firebaseSDK;
