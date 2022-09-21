import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

import { app } from './config.js';

export const auth = getAuth(app);

// eslint-disable-next-line max-len
export const addUser = (userEmail, userPassword) =>
  createUserWithEmailAndPassword(auth, userEmail, userPassword);

export const googleProvider = new GoogleAuthProvider();

export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
