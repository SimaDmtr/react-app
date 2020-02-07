import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC6c--ruOCfSHy8AaVzSTc6dWIsfoowFzQ",
    authDomain: "social-network-d06ee.firebaseapp.com",
    databaseURL: "https://social-network-d06ee.firebaseio.com",
    projectId: "social-network-d06ee",
    storageBucket: "social-network-d06ee.appspot.com",
    messagingSenderId: "90387507024",
    appId: "1:90387507024:web:2c3a039b7ed37cfeb1ee55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;