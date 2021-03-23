import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBS2kWymXTqiB8iQINqQlBTgf_1ZosUrZk",
    authDomain: "simplenotes-bc0e8.firebaseapp.com",
    projectId: "simplenotes-bc0e8",
    storageBucket: "simplenotes-bc0e8.appspot.com",
    messagingSenderId: "101481728864",
    appId: "1:101481728864:web:af24181537b4461feeec05",
    measurementId: "G-GK6ZN8WS4T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics();
export default firebaseConfig

