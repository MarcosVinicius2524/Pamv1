// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3JKa8nY4tcyMloiHqMOWS91CumkK8TxI",
  authDomain: "fir-01-8079d.firebaseapp.com",
  databaseURL: "https://fir-01-8079d-default-rtdb.firebaseio.com",
  projectId: "fir-01-8079d",
  storageBucket: "fir-01-8079d.appspot.com",
  messagingSenderId: "1032284604688",
  appId: "1:1032284604688:web:41faf02bfd2e698ca4bd95",
  measurementId: "G-9NNW4Y460M"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;