// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzJ_PMIdpeeo8jiTgrhR4Z7DWc-B13iT4",
    authDomain: "pcfejl-92407.firebaseapp.com",
    databaseURL: "https://pcfejl-92407.firebaseio.com",
    projectId: "pcfejl-92407",
    storageBucket: "pcfejl-92407.appspot.com",
    messagingSenderId: "17374909485",
    appId: "1:17374909485:web:79019562ed4fad7f5ad4a4",
    measurementId: "G-Z9P51JW7JV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();