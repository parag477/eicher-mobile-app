// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBq66a3boLKx2o4nTbWX4y_Ho6bG6IopW8",
    authDomain: "eicher-app-2c931.firebaseapp.com",
    projectId: "eicher-app-2c931",
    storageBucket: "eicher-app-2c931.appspot.com",
    messagingSenderId: "735561156602",
    appId: "1:735561156602:web:486e9312b0eae831f1c643",
    measurementId: "G-35QDFSWV50"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
export { firestore };