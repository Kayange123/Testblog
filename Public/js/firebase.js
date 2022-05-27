 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyA_gUpj4uHwFbgmPMCn5jW6qtUDcxMycu8",
     authDomain: "blogging-site-946fe.firebaseapp.com",
     projectId: "blogging-site-946fe",
     storageBucket: "blogging-site-946fe.appspot.com",
     messagingSenderId: "35571216158",
     appId: "1:35571216158:web:f8b04cb96fb66dc351630f"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 let db = firebase.firestore();