// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';
import { userInfo } from '../main.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//export const saveEmail = (userEmail) => addDoc(collection(db, 'emails'), { userEmail });
export const savePost = (userEmail, userPost) =>
  addDoc(collection(db, 'posts'), { userEmail, userPost });
//console.log(userEmail.value);
export const getPosts = () => getDocs(collection(db, 'posts'));
//export const getEmail = () => getDocs(collection(db, 'emails'));

export const onGetPosts = (callback) =>
  onSnapshot(collection(db, 'post'), callback);
