import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2vu3XPqGBPpmfChjwpFCT7yIJGOhOj94',
  authDomain: 'slack-clone-913c8.firebaseapp.com',
  databaseURL: 'https://slack-clone-913c8-default-rtdb.firebaseio.com',
  projectId: 'slack-clone-913c8',
  storageBucket: 'slack-clone-913c8.appspot.com',
  messagingSenderId: '333101197804',
  appId: '1:333101197804:web:7f511b321c577a3044f8c9',
  measurementId: 'G-ME9FDP0XNN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
