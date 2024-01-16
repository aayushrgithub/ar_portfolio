// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApTcf1bQI2NdavgOI3TIlQJ18nH4v0EsU",
    authDomain: "portfolioresume-be659.firebaseapp.com",
    projectId: "portfolioresume-be659",
    storageBucket: "portfolioresume-be659.appspot.com",
    messagingSenderId: "371382305188",
    appId: "1:371382305188:web:0a62d490a71ca0d3604131",
    measurementId: "G-84M3MFB9CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);