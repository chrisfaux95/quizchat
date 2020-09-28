import firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: "fire-test-67331", 
    apiKey: "AIzaSyAy_Si1aH4CuFNJJ69CBUrb4-qbU7gkk1c",
    
    databaseURL: "https://fire-test-67331.firebaseio.com"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase; 