import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDamYZ6-N--XI7PI-VH5vYH8eXvr8_Sahg",
    authDomain: "diversity-hotline-app.firebaseapp.com",
    databaseURL: "https://diversity-hotline-app.firebaseio.com",
    projectId: "diversity-hotline-app",
    storageBucket: "diversity-hotline-app.appspot.com",
    messagingSenderId: "503068765117",
    appId: "1:503068765117:web:7ceb76423686bd0c7040d4"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;