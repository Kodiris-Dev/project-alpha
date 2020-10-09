import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBUNGogD7C8z5P1Y_kzoQfZn1YGwbt7Jnc",
    authDomain: "fhn-web-membership.firebaseapp.com",
    databaseURL: "https://fhn-web-membership.firebaseio.com",
    projectId: "fhn-web-membership",
    storageBucket: "fhn-web-membership.appspot.com",
    messagingSenderId: "868991071485",
    appId: "1:868991071485:web:6517f0181aa9a875c9ba94",
    measurementId: "G-XHJ3G9RPEN"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire