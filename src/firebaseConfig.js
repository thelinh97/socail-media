import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBScd_GqnkfG70fu1TK2AG8HdLLarKCXac",
  authDomain: "social-media-401aa.firebaseapp.com",
  databaseURL: "https://social-media-401aa.firebaseio.com",
  projectId: "social-media-401aa",
  storageBucket: "social-media-401aa.appspot.com",
  messagingSenderId: "262258984415",
  appId: "1:262258984415:web:bcc06e240b996851a7f06a",
  measurementId: "G-703B5NV3WL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
