import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCpDHqTA2sX5zp1_TuGirUl5mOkY9Ztt0",
    authDomain: "disneyplus-clone-ec7da.firebaseapp.com",
    projectId: "disneyplus-clone-ec7da",
    storageBucket: "disneyplus-clone-ec7da.appspot.com",
    messagingSenderId: "237320023950",
    appId: "1:237320023950:web:10dc39e827fc8841d5fedf",
    measurementId: "G-RKPSTM4KN0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
