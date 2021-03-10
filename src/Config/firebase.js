import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB5SNv574gonKbETCQUQ0UCvUkZ846kC4Q",
    authDomain: "mi-sitio-utn.firebaseapp.com",
    databaseURL: "https://mi-sitio-utn-default-rtdb.firebaseio.com",
    projectId: "mi-sitio-utn",
    storageBucket: "mi-sitio-utn.appspot.com",
    messagingSenderId: "519408665489",
    appId: "1:519408665489:web:3f9aa52099a64db5631030"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth = firebase.auth();
  firebase.db = db;
  
  export default firebase;