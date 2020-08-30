import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfki0mFnYactrT67aj-bheavcR9iZCyqw",
  authDomain: "covid-educational-app.firebaseapp.com",
  databaseURL: "https://covid-educational-app.firebaseio.com",
  projectId: "covid-educational-app",
  storageBucket: "covid-educational-app.appspot.com",
  messagingSenderId: "557446663378",
  appId: "1:557446663378:web:1b1444d9ee9cf4718cb10b",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
