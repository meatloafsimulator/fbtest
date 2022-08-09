import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import {getDatabase, ref, set, increment, onValue} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js';

const app = initializeApp({
  apiKey: "AIzaSyBDxd3ko7JZ1KSo99UV5-sT6l-GmZtFw28",
  authDomain: "rkt1-fbtest.firebaseapp.com",
  databaseURL:
    "https://rkt1-fbtest-default-rtdb.firebaseio.com",
  projectId: "rkt1-fbtest",
  storageBucket: "rkt1-fbtest.appspot.com",
  messagingSenderId: "16965446984",
  appId: "1:16965446984:web:c949bcd456847758fa177d",
});
const db = getDatabase(app);

export {db, ref, set, increment, onValue};
