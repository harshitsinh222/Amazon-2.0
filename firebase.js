import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfonWh4E75WXkAj-1faroQ9kC0Pmdk77Y",
  authDomain: "fir-c7234.firebaseapp.com",
  projectId: "fir-c7234",
  storageBucket: "fir-c7234.appspot.com",
  messagingSenderId: "1063916943719",
  appId: "1:1063916943719:web:b96520f8dcb9582dab97c2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();
