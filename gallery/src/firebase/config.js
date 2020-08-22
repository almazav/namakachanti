import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7B8HQC9J8x_e7Inv9kVV1HZB6LCxZsEE",
    authDomain: "namaka-galley.firebaseapp.com",
    databaseURL: "https://namaka-galley.firebaseio.com",
    projectId: "namaka-galley",
    storageBucket: "namaka-galley.appspot.com",
    messagingSenderId: "243416618613",
    appId: "1:243416618613:web:28b322bca910e54ba24a3c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };