import {qs, qsa, ael, aelo} from './utility.js';
import {
  db, ref, set, increment, onValue,
  auth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, onAuthStateChanged,
  signOut,
} from './firebase.js';

async function login() {
  const emInput = qs('.login input[type=email]');
  const pwInput = qs('.login input[type=password]');
  const errorMessage = qs('.login .error-message');
  try {
    const cred = await signInWithEmailAndPassword(
      auth, emInput.value, pwInput.value
    );
    errorMessage.style.display = 'none';
    emInput.value = '';
    pwInput.value = '';
  } catch (error) {
    errorMessage.style.display = 'block';
  }
}

async function logout() {
  await signOut(auth);
}

ael('.login button', 'click', login);
ael('.app button', 'click', logout);

async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    qs('.login').style.display =
        user ? 'none' : 'block';
    qs('.app').style.display =
        user ? 'block' : 'none';
    qs('.app span').innerHTML = user?.email ?? '';
  });
}

monitorAuthState();
