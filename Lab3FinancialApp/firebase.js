// firebase.js

import * as firebase from "firebase/app";
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvtIIc-8Is3F7x5xzeou-lzQw4qKluKJ8",
  authDomain: "adv-lab04.firebaseapp.com",
  projectId: "adv-lab04",
  storageBucket: "adv-lab04.appspot.com",
  messagingSenderId: "945175362351",
  appId: "1:945175362351:web:0c1d24615cfa50771cffda"
};

 firebase.initializeApp(firebaseConfig);

export default firebase ; 