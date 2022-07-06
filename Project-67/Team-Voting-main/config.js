import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBn1HfDMrKBTV1LhHpciUF0vvnJs6JHvfE",
    authDomain: "project-67-28ca0.firebaseapp.com",
    projectId: "project-67-28ca0",
    storageBucket: "project-67-28ca0.appspot.com",
    messagingSenderId: "825897203175",
    appId: "1:825897203175:web:d725c6f06833fcd02bb942",
    measurementId: "G-0DC1Z8LWGT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();