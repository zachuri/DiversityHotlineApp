import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA8MKh6BX2J2fPq4i41nKiIBAvN_3Z5Gok",
    authDomain: "diversityhotline-9f1c2.firebaseapp.com",
    projectId: "diversityhotline-9f1c2",
    storageBucket: "diversityhotline-9f1c2.appspot.com",
    messagingSenderId: "111484513593",
    appId: "1:111484513593:web:3d3ce558b3b4af197bcce8",
    measurementId: "G-8BZ6Q1CCMK"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

//Login to Firebase same as Diversity Hotline Email