import  firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDArB4sNeEfdELcxDN_-VJ5fruNSX0RvNY",
    authDomain: "slack-clone-f3e8d.firebaseapp.com",
    projectId: "slack-clone-f3e8d",
    storageBucket: "slack-clone-f3e8d.appspot.com",
    messagingSenderId: "158514975886",
    appId: "1:158514975886:web:d873e418a6e37c7dc1a5df",
    measurementId: "G-723K7VYKXF"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth(); // enable signin thru google
  const provider = new firebase.auth.GoogleAuthProvider;  
  export {auth, provider}; 
  export default db;
