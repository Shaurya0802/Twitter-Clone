import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALZrOEhh-H8NvVToQ5VDNHD-ZUMGA27Nk",
    authDomain: "twitter-clone-6a37f.firebaseapp.com",
    databaseURL: "https://twitter-clone-6a37f.firebaseio.com",
    projectId: "twitter-clone-6a37f",
    storageBucket: "twitter-clone-6a37f.appspot.com",
    messagingSenderId: "518980864649",
    appId: "1:518980864649:web:58e5bedd9a43b6ecd65458",
    measurementId: "G-PK802TWLES"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;