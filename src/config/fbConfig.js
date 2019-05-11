import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "bloggit-8cf6d.firebaseapp.com",
  databaseURL: "https://bloggit-8cf6d.firebaseio.com",
  projectId: "bloggit-8cf6d",
  storageBucket: "bloggit-8cf6d.appspot.com",
  messagingSenderId: "82640991344",
  appId: "1:82640991344:web:6d7aebe4168a0fed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
