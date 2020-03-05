import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDTDX279LfdltWfXJYRpbHqAiSVn7YjCJY",
    authDomain: "movie-db-react.firebaseapp.com",
    databaseURL: "https://movie-db-react.firebaseio.com",
    projectId: "movie-db-react",
    storageBucket: "movie-db-react.appspot.com",
    messagingSenderId: "162557888386",
    appId: "1:162557888386:web:681af99759e8af5c4b719b"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
